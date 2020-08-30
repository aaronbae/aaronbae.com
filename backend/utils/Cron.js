const fetch = require('node-fetch')
const Stocks = require('./Stocks')
const Dates = require('./Dates')

module.exports = {
  reload_stocks: reload_stocks,
  resolve_stock: resolve_stock,
  get_stocks_status: get_stocks_status
}

/********************************************
 * 
 * STOCKS CRON JOB
 * 
 ********************************************/
// Status Variables
const STOCKS_JOB_INTERVAL = 5;// minutes
let STOCKS_JOB_STATUS = {
  n: 0,
  batch_total: 0,
  batch_started: null,
  last_updated: null,
  estimated_finish_time: null,
  current_time: new Date(),
  queue: [],
}

// Functions
function get_stocks_status() {
  STOCKS_JOB_STATUS.current_time = new Date()
  return STOCKS_JOB_STATUS
}
function reload_stocks() {
  STOCKS_JOB_STATUS.queue = []
  fetch(`https://finnhub.io/api/v1/stock/symbol?exchange=US&token=${process.env.FINN_HUB_TOKEN}`)
  .then((res) => res.json())
  .then(stocks => {
    stocks.forEach(entry => {
      STOCKS_JOB_STATUS.queue.push(entry.symbol)
    })
    STOCKS_JOB_STATUS.batch_total = stocks.length
    STOCKS_JOB_STATUS.n = stocks.length
    STOCKS_JOB_STATUS.batch_started = `${Dates.current()}`
    STOCKS_JOB_STATUS.estimated_finish_time = Dates.format(new Date(stocks.length * 5000 + Date.now())) 
    console.log(`[${Dates.current()}] CRON : reloaded ${stocks.length} stocks!` )
  })
  .catch(error => {
    console.log(error)
    console.log(`[${Dates.current()}] CRON : failed to reload stocks!`)
  })
}
function resolve_stock() {
  if(STOCKS_JOB_STATUS.n > 0){
    const ticker = STOCKS_JOB_STATUS.queue.shift()
    STOCKS_JOB_STATUS.n -= 1
    Stocks.guarantee_fresh_yahoo(ticker).then(async () =>{
      // TODO
      //const stats = await mongoose.connection.db.stats()
      STOCKS_JOB_STATUS.last_updated = `${Dates.current()}`
      STOCKS_JOB_STATUS.estimated_finish_time = Dates.format(new Date(STOCKS_JOB_STATUS.n * 5000 + Date.now())) 
      console.log(`[${Dates.current()}] CRON : Resolved ${ticker}`)
    })
    .catch(error => {
      console.log(`[${Dates.current()}] CRON : Failed to resolve ${ticker}`)
      console.log(error)
    })
  }
}
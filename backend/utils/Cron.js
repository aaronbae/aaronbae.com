const fetch = require('node-fetch')
const Stocks = require('./Stocks')
const Dates = require('./Dates')

module.exports = {
  reload_stocks: reload_stocks,
  resolve_stock: resolve_stock,
}

let stocks_queue = []

function reload_stocks() {
  stocks_queue = []
  fetch(`https://finnhub.io/api/v1/stock/symbol?exchange=US&token=${process.env.FINN_HUB_TOKEN}`)
  .then((res) => res.json())
  .then(stocks => {
    stocks.forEach(entry => {
      stocks_queue.push(entry.symbol)
    })
    console.log(`[${Dates.current()}] CRON : reloaded ${stocks.length} stocks!` )
  })
  .catch(error => {
    console.log(`[${Dates.current()}] CRON : failed to reload stocks!`)
  })
}
function resolve_stock() {
  if(stocks_queue.length > 0){
    const ticker = stocks_queue.shift()
    Stocks.guarantee_fresh_yahoo(ticker).then(()=>{
      console.log(`[${Dates.current()}] CRON : Resolved ${ticker}`)
    })
    .catch(error => {
      console.log(`[${Dates.current()}] CRON : Failed to resolve ${ticker}`)
      console.log(error)
    })
  }
}
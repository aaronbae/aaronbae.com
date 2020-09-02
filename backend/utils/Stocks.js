const Stock = require('../models/Stock');
const Dates = require('./Dates')
const fetch = require('node-fetch')

/*********************************************************
 * 
 * Stocks.js
 * 1. query_stocks
 *    - input: 
 *      - ticker    : string 
 *      - start_date: date object
 *      - end_date  : date object
 *    - output: 
 *      -  Mongoose Query object
 * 
 * 2. guarantee_fresh_yahoo
 *    - input: 
 *      - ticker : string
 *    - output:
 *      - Promise object
 * 
 *********************************************************/
module.exports = {
  query_stocks: query_stocks,
  guarantee_fresh_yahoo: guarantee_fresh_yahoo
}

function query_stocks(ticker, start_date, end_date) {
  return Stock.aggregate([
    { $match: { ticker: ticker }},
    { $unwind: '$history' },
    { $match: { 'history.date': {$gte: start_date, $lte: end_date} } },
    { $unset: "history._id" }, 
    { $group: { 
      _id: "$_id",
      history: {
        $push: "$history"
      },
      updated: { $first: "$updated" }
    }}
  ])
}
function get_yahoo_url(ticker, start, end) {
  const formatted_start = Math.trunc(start.getTime() / 1000);
  const formatted_end = Math.trunc(end.getTime() / 1000);
  return `https://query1.finance.yahoo.com/v7/finance/download/${ticker}?period1=${formatted_start}&period2=${formatted_end}&interval=1d&events=history`
}
function dangerously_fetch_yahoo(ticker, start, end) {
  return new Promise((resolve, reject) =>{
    fetch(get_yahoo_url(ticker, start, end))
    .then(response=>response.text())
    .then( text => {
      if(text.includes("404 Not Found") || text.includes("422 Unprocessable Entity")) {
        throw new Error("Invalid ticker symbol!")
      } 
      const new_history = []
      const splitted_text = text.split("\n")
      for(let i = 1; i < splitted_text.length; i++) {
        const splitted_row = splitted_text[i].split(",")    
        if(!splitted_row.includes("null")){
          const new_row = {}
          new_row.date = new Date(splitted_row[0])
          new_row.open = splitted_row[1]
          new_row.high = splitted_row[2]
          new_row.low = splitted_row[3]
          new_row.close = splitted_row[4]
          new_row.adj_close = splitted_row[5]
          new_row.volume = splitted_row[6]
          new_history.push(new_row)
        }
      }   
      if(new_history.length === 0){
        throw new Error("No New History!")
      } 
      Dates.log("UTILS/STOCKS", `Added ${new_history.length} new records!`)
      return Stock.updateOne(
        { ticker: ticker },
        { $push: { history: new_history },
          $set: { updated: end }
        },
        { upsert: true }
      ).then(() => resolve("Yahoo Info Fetched"))
    })
    .catch(error => reject(error))
  })
}
function guarantee_fresh_yahoo(ticker) {
  return new Promise((resolve, reject) => {
    if(!ticker.match(/^[A-Z]+$/)) {
    throw new Error("Invalid ticker symbol!") 
    }
    const today = Dates.round_date(Date.now())
    const query = Stock.find({ticker: ticker}).select("-history")
    query.exec().then( stocks => {
      if(stocks.length == 0 || stocks[0].updated < today){
        // if no company found or info outdated
        const last_updated = stocks.length==0? new Date('1900'): stocks[0].updated
        return dangerously_fetch_yahoo(ticker, last_updated, today)  
      }
    })
    .then(()=> {
      resolve("Data is Fresh!")
    })
    .catch((error)=> reject(error))
  })
}
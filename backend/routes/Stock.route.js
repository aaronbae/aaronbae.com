const express = require('express');
const userRoutes = express.Router();
const fetch = require('node-fetch')
let Stock = require('../models/Stock');

/*********************************************************
 * 
 * Helpers
 * - round_date
 * - days_ago
 * - get_query
 * - get_yahoo_url
 * - dangerously_fetch_yahoo
 * - safely_fetch_yahoo
 * 
 *********************************************************/
function round_date(milliseconds) {
  const days_in_milli = 1000 * 60 * 60 * 24
  return new Date(Math.floor(milliseconds / days_in_milli) * days_in_milli)
}
function days_ago(reference_date, num_days) {
  let new_date = round_date(reference_date.getTime())
  new_date.setDate(new_date.getDate() - num_days)
  return new_date
}
function get_query(ticker, start_date, end_date) {
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
function dangerously_fetch_yahoo(ticker, start, end, failure_cb, success_cb) {
  fetch(get_yahoo_url(ticker, start, end)).then(function(response){
    response.text().then(function(text) {
      const new_history = []
      const splitted_text = text.split("\n")
      for(let i = 1; i < splitted_text.length; i++) {
        const new_row = {}
        const splitted_row = splitted_text[i].split(",")
        new_row.date = new Date(splitted_row[0])
        new_row.open = splitted_row[1]
        new_row.high = splitted_row[2]
        new_row.low = splitted_row[3]
        new_row.close = splitted_row[4]
        new_row.adj_close = splitted_row[5]
        new_row.volume = splitted_row[6]
        new_history.push(new_row)
      }
      Stock.updateOne(
        { ticker: ticker },
        { $push: { history: new_history },
          $set: { updated: end}
        },
        { upsert: true },
        function(update_error, result) {
          if(update_error) {
            failure_cb(update_error)
          } else {
            console.log(`/stocks/${ticker} : Added ${new_history.length} new records!`)
            success_cb()
          }
        }
      )
    })
  })
  .catch(yahoo_error => {
    failure_cb(yahoo_error)
  })
}
function safely_fetch_yahoo(ticker, failure_cb, success_cb) {
  const today = round_date(Date.now())
  const query = Stock.find({ticker: ticker}).select("-history")
  query.exec(function(finder_error, stocks) {
    if( finder_error ){
      failure_cb(finder_error)
    } 
    else if(stocks.length == 0 || stocks[0].updated < today){
      // if no company found or infor outdated
      const last_updated = stocks.length==0? new Date('1900'): stocks[0].updated
      dangerously_fetch_yahoo(ticker, last_updated, today, failure_cb, success_cb)  
    } 
    else {
      success_cb()
    }
  })  
}

/*********************************************************
 * 
 * Accesors
 * - /:id
 * - /:id/:days
 * 
 *********************************************************/
// Query specified by start and end dates.
// Defaults to yesterday and today
userRoutes.route('/:id').get(function (req, res) {
  const ticker = req.params.id.toString().toUpperCase()
  let end = round_date(Date.now())
  let start = days_ago(end, 1)
  if("end" in req.query && Number.isInteger(parseInt(req.query.end))){
    end = round_date(req.query.end) 
    start = days_ago(end, 1)
  }
  if("start" in req.query && Number.isInteger(parseInt(req.query.start))){
    start = round_date(min(req.query.start, start.getTime()))
  }

  const failure_callback = function(current_error) {
    console.log(`/stocks/${ticker} : Failed!`)
    console.log(current_error)
    res.json(current_error);
  }
  const final_callback = function(final_error, stocks) {
    if (final_error) {
      failure_callback(final_error)
    } else  {
      console.log(`/stocks/${ticker} : Successfully returned!`)
      res.json({stocks: stocks[0]})
    }
  }
  const final_query = get_query(ticker, start, end)
  safely_fetch_yahoo(ticker, failure_callback, ()=>{
    final_query.exec(final_callback)
  })
});

// Query specified by how many days in the past
userRoutes.route('/:id/:days').get(function (req, res) {
  const ticker = req.params.id.toString().toUpperCase()
  const days = parseInt(req.params.days)
  let end = round_date(Date.now())
  let start = days_ago(end, days)

  const failure_callback = function(current_error) {
    console.log(`/stocks/${ticker}/${days} : Failed!`)
    console.log(current_error)
    res.json(current_error);
  }
  const final_callback = function(final_error, stocks) {
    if (final_error) {
      failure_callback(final_error)
    } else  {
      console.log(`/stocks/${ticker}/${days} : Successfully returned!`)
      res.json({stocks: stocks[0]})
    }
  }
  const final_query = get_query(ticker, start, end)
  safely_fetch_yahoo(ticker, failure_callback, ()=>{
    final_query.exec(final_callback)
  })
});

module.exports = userRoutes;
      
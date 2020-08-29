const express = require('express');
const userRoutes = express.Router();
const Stocks = require("../utils/Stocks");
const Dates = require("../utils/Dates");

// Query specified by start and end dates.
// Defaults to yesterday and today
userRoutes.route('/:id').get(function (req, res) {
  const ticker = req.params.id.toString().toUpperCase()
  let end = Dates.round_date(Date.now())
  let start = Dates.days_ago(end, 1)
  if("end" in req.query && Number.isInteger(parseInt(req.query.end))){
    end = Dates.round_date(req.query.end) 
    start = Dates.days_ago(end, 1)
  }
  if("start" in req.query && Number.isInteger(parseInt(req.query.start))){
    start = Dates.round_date(min(req.query.start, start.getTime()))
  }

  const final_query = Stocks.query_stocks(ticker, start, end)
  Stocks.guarantee_fresh_yahoo(ticker).then(()=>{
    return final_query.exec()
  })
  .then(stocks => {
    console.log(`/stocks/${ticker} : Successfully returned!`)
    res.json({stocks: stocks[0]})
  })
  .catch(error => {
    console.log(`/stocks/${ticker} : Failed!`)
    console.log(error)
    res.status(500)
    res.send({error: error.message})
  })
});

// Query specified by how many days in the past
userRoutes.route('/:id/:days').get(function (req, res) {
  const ticker = req.params.id.toString().toUpperCase()
  const days = parseInt(req.params.days)
  let end = Dates.round_date(Date.now())
  let start = Dates.days_ago(end, days)

  const final_query = Stocks.query_stocks(ticker, start, end)
  Stocks.guarantee_fresh_yahoo(ticker).then(()=>{
    return final_query.exec()
  })
  .then(stocks => {
    console.log(`/stocks/${ticker}/${days} : Successfully returned!`)
    res.json({stocks: stocks[0]})
  })
  .catch(error => {
    console.log(`/stocks/${ticker}/${days} : Failed!`)
    console.log(error)
    res.status(500)
    res.send({error: error.message})
  })
});

module.exports = userRoutes;
      
// Environment settings
require('dotenv').config()

// Backend
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const compression = require('compression')
const mongoose = require('mongoose');
const config = require('./DB')
const cron = require("node-cron");
const cron_utils = require("./utils/Cron");
const mail = require("./utils/Mail")

// Routes
const defaultRoute = require('./routes/Default.route');
const postRoute = require('./routes/Post.route');
const userRoute = require('./routes/User.route');
const fileRoute = require('./routes/File.route');
const stockRoute = require('./routes/Stock.route');
const monitorRoute = require('./routes/Monitor.route');

// Supporting
const Sentry = require('@sentry/node'); 
Sentry.init({ 
  dsn: process.env.SENTRY_DSN, 
});
    
// Configure Mongoose
mongoose.Promise = global.Promise;
mongoose.connect(config.DB, config.options).then(
  () => {
    console.log(`DB connected to ${config.DB}`)
  },
  err => { console.log('Cannot connect to the database\n' + err) }
);

// Boiler Plate
const app = express();
app.use(Sentry.Handlers.requestHandler());
app.use(compression());
app.use(bodyParser.json());
app.use(cors());

// Back End Routes
app.use("/", defaultRoute);
app.use('/api/posts', postRoute);
app.use('/api/users', userRoute);
app.use('/api/files', fileRoute);
app.use('/api/stocks', stockRoute);
app.use('/api/monitor', monitorRoute);

// Cron Jobs
// TODO: Get rid of this line after testing
mail.warn_cron_status({}, "hello")
cron.schedule('0 0 0 * * *', () => {
  // At Midnight
  cron_utils.reload_stocks()
});
cron.schedule('*/5 * * * * *', () => {
  // Every 5 seconds
  cron_utils.resolve_stock()
})

app.use(Sentry.Handlers.errorHandler());

app.listen(4000, () => {
  console.log("Server is listening on port 4000");
});
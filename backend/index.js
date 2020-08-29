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

// Routes
const defaultRoute = require('./routes/Default.route');
const postRoute = require('./routes/Post.route');
const userRoute = require('./routes/User.route');
const fileRoute = require('./routes/File.route');
const stockRoute = require('./routes/Stock.route');

// Supporting
const Sentry = require('@sentry/node'); 
Sentry.init({ 
  dsn: 'https://c7f35c6182a34d129374dc31f77ae3b5@o418535.ingest.sentry.io/5322885', 
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

// Cron Jobs
cron.schedule('0 0 0 * * *', () => {
  cron_utils.reload_stocks()
});
cron.schedule('*/5 * * * * *', () => {
  cron_utils.resolve_stock()
})

app.use(Sentry.Handlers.errorHandler());

app.listen(4000, () => {
  console.log("Server is listening on port 4000");
});
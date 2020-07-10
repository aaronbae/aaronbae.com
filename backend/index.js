// Environment variables
const dotenv = require('dotenv');
dotenv.config();

// Imports
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./DB');
const Sentry = require('@sentry/node');

// Configuring different routes
const defaultRoute = require('./routes/Default.route');
const postRoute = require('./routes/Post.route');
const userRoute = require('./routes/User.route');
const fileRoute = require('./routes/File.route');

// Configuring Mongoose
mongoose.Promise = global.Promise;
mongoose.connect(config.DB, config.options).then(
    () => {console.log('Database is connected') },
    err => { console.log('Cannot connect to the database\n'+ err)}
);

// Configuring the backend app
const app = express();
Sentry.init({ dsn: 'https://c7f35c6182a34d129374dc31f77ae3b5@o418535.ingest.sentry.io/5322885' });
app.use(Sentry.Handlers.requestHandler()); // The request handler must be the first middleware on the app
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use("/", defaultRoute);
app.use('/posts', postRoute);
app.use('/users', userRoute);
app.use('/files', fileRoute);
app.use(Sentry.Handlers.errorHandler());
const port = process.env.PORT || 4000;

const server = app.listen(port, function(){
    console.log('Listening on port ' + port);
});
/*
const express = require('express')
const app = express()
var router = require('./routes/Default.route.js/index.js.js');

app.use('/', router);
app.listen(3001, () => console.log('Server ready'))
*/
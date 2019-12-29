// Imports
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./DB');

// Configuring different routes
const defaultRoute = require('./routes/Default.route');
const postRoute = require('./routes/Post.route');
const userRoute = require('./routes/User.route');

// Configuring Mongoose
mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
    () => {console.log('Database is connected') },
    err => { console.log('Cannot connect to the database'+ err)}
);

// Configuring the backend app
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use("/", defaultRoute);
app.use('/posts', postRoute);
app.use('/users', userRoute);
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
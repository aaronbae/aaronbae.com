const express = require('express')
const app = express()
var router = require('./router.js');

app.use('/', router);
app.listen(3001, () => console.log('Server ready'))
const express = require('express');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config()
var dburl = process.env.MONGO_DB_URL;
//url router import
const routes = require('./routes/clientrouter');
const routes1 = require('./routes/salesrouter');
const routes2 = require('./routes/leadrouter')
const port = process.env.SERVER_PORT || 5000;
const app = express();
//To parse URL encoded data
app.use(bodyParser.urlencoded({ extended: true }))
//To parse json data
app.use(bodyParser.json())
//route to url router
app.use('/client',routes);
app.use('/sales',routes1);
app.use('/lead',routes2);
//connect to mongo db use mongo
mongoose.connect(dburl);

 //default router
app.get('/', function(req, res){
   res.send('GET route on things.');
});
app.listen(port, () => {
   console.log(`Server started on port `+port);
});
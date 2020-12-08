require('dotenv').config()

const dburl = process.env.MONGO_DB_URL;
const port = process.env.SERVER_PORT || 5000;

// Initialize express app
const express = require('express');
const app = express();

//To parse URL encoded data
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json()) //To parse json data

// Import All routes
const routes = require('./backend/routes');
app.use('/api/', routes);

//handle CORS related issues we might face if we try to access our api from a different dormain.
app.use((req, res, next) => {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
 });

//connect to mongo db use mongo
const mongoose = require('mongoose');
mongoose.connect(dburl, {useNewUrlParser: true, useUnifiedTopology: true,useFindAndModify: false });

//default router
 app.get('/', function(req, res){
    res.send('GET route on things.');
 });

app.listen(port, () => {
   console.log(`Server started on port ${port}`);
});

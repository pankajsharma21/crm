const express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
const app = express();
//url router import
var url = require('./url.js');
//route to url router
app.use('/', url);
//To parse URL encoded data
app.use(bodyParser.urlencoded({ extended: false }))
//To parse json data
app.use(bodyParser.json())
//connect to mongo db use mongo
mongoose.connect('mongodb://localhost/crm');
//model client
var clientSchema = mongoose.Schema({
    name: String,
    age: Number,
    nationality: String
 });
 var client = mongoose.model("client", clientSchema)

 //post request

 app.post('/client', function(req, res){
    var clientInfo = req.body; //Get the parsed information
    
    if(!clientInfo.name || !clientInfo.age || !clientInfo.nationality){
       res.render('show_message', {
          message: "Sorry, you provided worng info", type: "error"});
    } else {
       var newClient = new client({
          name: clientInfo.name,
          age: clientInfo.age,
          nationality: clientInfo.nationality
       });
         
       newClient.save(function(err, Client){
          if(err)
             res.render('show_message', {message: "Database error", type: "error"});
          else
             res.render('show_message', {
                message: "New person added", type: "success", client: clientInfo});
       });
    }
 });


 //get all
 app.get('/client', function(req, res){
    client.find(function(err, response){
       res.json(response);
    });
 });

 //get-one
 app.get('/client/:id', function(req, res){
    client.findById(req.params.id, function(err, response){
       res.json(response);
    });
 });

 //update

 app.put('/client/:id', function(req, res){
    client.findByIdAndUpdate(req.params.id, req.body, function(err, response){
       if(err) res.json({message: "Error in updating person with id " + req.params.id});
       res.json(response);
    });
 });

 //delete
 app.delete('/client/:id', function(req, res){
    client.findByIdAndRemove(req.params.id, function(err, response){
       if(err) res.json({message: "Error in deleting record id " + req.params.id});
       else res.json({message: "Person with id " + req.params.id + " removed."});
    });
 });




app.listen(3000);
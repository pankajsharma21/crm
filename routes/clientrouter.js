var express = require('express');
var router = express.Router();
const client = require('../models/clientmodel');


//default router
router.get('/viewmsg', function(req, res){
   res.send('get a request IN CLIENT.');
});

 //post request

 router.post('/addclient', function(req, res){
    var clientInfo = req.body; //Get the parsed information
    
    if(!clientInfo.company_name || !clientInfo.client_name || !clientInfo.tel){
       res.json({ status: "error",
          message: "Sorry, you provided worng info"});
    } else {
       var newClient = new client({
         client_id: clientInfo.client_id,
         client_name: clientInfo.client_name,
         company_name: clientInfo.company_name,
         position: clientInfo.position,
         tel: clientInfo.tel,
         email: clientInfo.email,
         last_contacted_on: clientInfo.last_contacted_on
       });
         
       newClient.save(function(err, Client){
          if(err)
             res.json({message: "Database error", status: "error"});
          else
             res.json({
                message: "New person added",status: "success" , client: clientInfo});
       });
    }
 });


 //get all
router.get('/views', function(req, res){
    client.find(function(err, response){
       res.json(response);
    });
 });

 //get-one
 router.get('/view/:id', function(req, res){
    client.findById(req.params.id, function(err, response){
       res.json(response);
    });
 });

 //update

 router.put('/update/:id', function(req, res){
    client.findByIdAndUpdate(req.params.id, req.body, function(err, response){
       if(err) res.json({message: "Error in updating person with id " + req.params.id});
       res.json(response);
    });
 });

 //delete
 router.delete('/delete/:id', function(req, res){
    client.findByIdAndRemove(req.params.id, function(err, response){
       if(err) res.json({message: "Error in deleting record id " + req.params.id});
       else res.json({message: "Person with id " + req.params.id + " removed."});
    });
 });



 module.exports = router;

 
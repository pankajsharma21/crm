var express = require('express');
var router = express.Router();
const lead = require('../models/leadsmodel');


//default router
router.get('/viewmsg', function(req, res){
   res.send('get a request IN lead.');
});

 //post request

 router.post('/addlead', function(req, res){
    var leadInfo = req.body; //Get the parsed information
    
    if(!leadInfo.id || !leadInfo.client_name || !leadInfo.tel_no){
       res.json({ status: "error",
          message: "Sorry, you provided worng info"});
    } else {
       var newlead = new lead({
        id: leadInfo.id,
        created_on: leadInfo.created_on,
        Source: leadInfo.Source,
        assigned_to: leadInfo.assigned_to,
        client_name: leadInfo.client_name,
        email: leadInfo.email,
        tel_no: leadInfo.tel_no,
        position: leadInfo.position,
        company: leadInfo.company,
        domain: leadInfo.domain,
        status: leadInfo.status,
        Confidence: leadInfo.Confidence,
        comments: [{ body: leadInfo.body, date: leadInfo.date }],
        connected_times: leadInfo.connected_times,
        isdelete: leadInfo.isdelete
       });
         
       newlead.save(function(err, lead){
          if(err)
             res.json({message: "Database error", status: "error"});
          else
             res.json({
                message: "New person added",status: "success" , lead: leadInfo});
       });
    }
 });


 //get all
router.get('/views', function(req, res){
    lead.find(function(err, response){
       res.json(response);
    });
 });

 //get-one
 router.get('/view/:id', function(req, res){
    lead.findById(req.params.id, function(err, response){
       res.json(response);
    });
 });

 //update

 router.put('/update/:id', function(req, res){
    lead.findByIdAndUpdate(req.params.id, req.body, function(err, response){
       if(err) res.json({message: "Error in updating person with id " + req.params.id});
       res.json(response);
    });
 });

 //delete
 router.delete('/delete/:id', function(req, res){
    lead.findByIdAndRemove(req.params.id, function(err, response){
       if(err) res.json({message: "Error in deleting record id " + req.params.id});
       else res.json({message: "Person with id " + req.params.id + " removed."});
    });
 });



 module.exports = router;

 
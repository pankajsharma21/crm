var express = require('express');
var router = express.Router();
const sales = require('../models/sales_teammodel');


//default router
router.get('/viewmsg', function(req, res){
   res.send('get a request iN sALES.');
});

 //post request

 router.post('/addemployee', function(req, res){
    var employeeInfo = req.body; //Get the parsed information
    
    if(!employeeInfo.employee_id || !employeeInfo.employee_name){
       res.json({ status: "error",
          message: "Sorry, you provided worng info"});
    } else {
       var newemployee = new sales({
         employee_id: employeeInfo.employee_id,
         employee_name: employeeInfo.employee_name,
         lead_pipeline: {
            open_leads:employeeInfo.open_leads,
            contacted_leads: employeeInfo.contacted_leads,
            qualified_leads: employeeInfo.qualified_leads,
            closed_lead: employeeInfo.closed_lead
        }
       });
         
       newemployee.save(function(err, Client){
          if(err)
             res.json({message: "Database error", status: "error"});
          else
             res.json({
                message: "New person added",status: "success" , sales: employeeInfo});
       });
    }
 });


 //get all
router.get('/views', function(req, res){
    sales.find(function(err, response){
       res.json(response);
    });
 });

 //get-one
 router.get('/view/:id', function(req, res){
    sales.findById(req.params.id, function(err, response){
       res.json(response);
    });
 });

 //update

 router.put('/update/:id', function(req, res){
    sales.findByIdAndUpdate(req.params.id, req.body, function(err, response){
       if(err) res.json({message: "Error in updating person with id " + req.params.id});
       res.json(response);
    });
 });

 //delete
 router.delete('/delete/:id', function(req, res){
    sales.findByIdAndRemove(req.params.id, function(err, response){
       if(err) res.json({message: "Error in deleting record id " + req.params.id});
       else res.json({message: "Person with id " + req.params.id + " removed."});
    });
 });



 module.exports = router;

 
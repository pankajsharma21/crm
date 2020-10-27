var express = require('express');
var router = express.Router();

//default router
router.get('/', function(req, res){
    res.send('GET route on things.');
 });

 module.exports = router;
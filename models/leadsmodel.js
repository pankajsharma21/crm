const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//model client
var leadSchema = new Schema({
    id: Number,
    created_on: Date,
    Source: String,
    assigned_to: String,
    client_name: String,
    email: String,
    tel_no: Number,
    position: String,
    company: String,
    domain: String,
    status: Boolean,
    Confidence: Number,
    comments: [{ body: String, date: Date }],
    connected_times: Number,
    isdelete: Boolean
});

//create model for client
var client = mongoose.model("lead", leadSchema)

module.exports = lead;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//model leads
var leadSchema = new Schema({
    id: Number,
    created_on: Date,
    source: String,
    assigned_to: String,
    client_name: String,
    email: String,
    tel_no: Number,
    position: String,
    company: String,
    domain: String,
    status: Boolean,
    confidence: Number,
    comments: [{ body: String, date: Date }],
    connected_times: Number,
    is_delete: Boolean
});

//create model for leads
var lead = mongoose.model("lead", leadSchema)

module.exports = lead;

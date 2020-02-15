const express = require('express');
const mongoose = require('mongoose');
var bodyParser = require('body-parser')
const app = express();

//Importing Controllers
const contact_list = require('./controller/emergency_contact_list');
const report = require('./controller/report');

//Initializing parser
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// API Registration
app.use('/contact_list',contact_list);
app.use('/report',report);

//Connecting to MongoDB
mongoose.connect('mongodb://localhost/sih')
    .then(()=> console.log('Connected to MongoDB...'))
    .catch(err =>  console.error(err));

//Activating Node Server
app.listen(3001,()=>{
    console.log("Listening on port ",3001);
});


const mongoose = require('mongoose');
const express = require('express');
const Contact_List = require('../models/emergency_contact_list_schema');
const router = express.Router();

// Fetch contact list based on state and city selected (Input: state,city) 
//(Output: [{state:statename,city:cityname,contact_type:String,number:String}])
router.post('/', async (req, res) => {
    let list = await Contact_List.find({ state: req.body.state,city:req.body.city });
    if (list) res.sendStatus(200).send(list);
    else res.send("Error in fetching.");
});

//Fetch cities (Input: state) (Output: [cityname])
router.post('/fetchCity', async (req, res) => {
    let list = await Report.distinct("city",{state:req.body.state});
    if (list) res.send(list);
    else res.send("Error in fetching.");
});

//Fetch state (Output: [statename])
router.post('/fetchState', async (req, res) => {
    let list = await Report.distinct("state");
    if (list) res.send(list);
    else res.send("Error in fetching.");
});

module.exports = router;

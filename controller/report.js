const mongoose = require('mongoose');
const express = require('express');
const Report = require('../models/report_schema');
const router = express.Router();

//Fetch all
router.post('/', async (req, res) => {
    let list = await Report.find({});
    if (list) res.sendStatus(200).send(list);
    else res.send("Error in fetching.");
});

//Create (Input: username,device_id,state,city,data) 
router.post('/create', async(req,res) => {
    let report = new Report({
        username: req.body.username,
        device_id: req.body.device_id,
        state: req.body.state,
        city: req.body.city,
        data: req.body.data,
        action_taken: false
    });
    let saved = await report.save();
    if(saved) res.sendStatus(200);
    else res.send("Error saving.")
});

//Update (Input: _id)
router.post('/update', async(req,res) => {
    let report_update = await Report.update({_id:req.body._id},{$set:{action_taken:true}})
    if(report_update) res.send(200);
    else res.sendStatus("Error updating.")
});

//Fetch city crime count based on state selected (Input: state) (Output: [{city:cityname,count:crime_count}])
router.post('/fetchCount', async (req, res) => {
    let list = await Report.distinct("city",{state:req.body.state});
    let result = []
    for (i=0;i<list.length;i++) {
        let crime_count = await Report.find({city:list[i]})
        result.push({
            city:list[i],
            count:crime_count.length
        })
    }

    if (result) res.sendStatus(200).send(result);
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

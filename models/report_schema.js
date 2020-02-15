// JavaScript source code
const mongoose = require('mongoose');

// create a schema
var Report = mongoose.model('Report', new mongoose.Schema({
    username:{
        type: String
    },
    device_id:{
        type: String
    },
    state:{
        type: String
    },
    city:{
        type: String
    },
    data:{
        type: String
    },
    action_taken:{
        type: Boolean,
        default: false
    }   

}));

module.exports = Report;
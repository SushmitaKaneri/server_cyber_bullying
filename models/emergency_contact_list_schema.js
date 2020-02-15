// JavaScript source code
const mongoose = require('mongoose');


const Contact_List = mongoose.model('Contact_List', new mongoose.Schema({
    state:{
        type: String
    },
    city:{
        type: String
    },
    contact_type:{
        type: String
    },
    number:{
        type: String
    }
}));

let c = new Contact_List({})
c.save();

module.exports = Contact_List;
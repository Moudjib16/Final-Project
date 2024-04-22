const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    name: {
        type : String,
        required : true
    },
    firstname:{
        type : String
    },
    password:{
        type : String,
        required : true
    },
    email:{
        type : String,
        required : true
    },
    address:{
        type : String
    },
    phone:{
        type : Number
    },
    city:{
        type: String
    },
    state:{
        type : String
    },
    userType:{
        type: Number,
        required : true
    }
}, { timestamps: true });

const user = mongoose.models.User || mongoose.model('User', Schema);

module.exports = user

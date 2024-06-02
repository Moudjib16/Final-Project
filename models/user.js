const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    name: {
        type : String,
        required : true
    },
    firstname:{
        type : String,
        required : true
    },
    gender:{
        type : String,
        required : true
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
        type : String,
        required : true
    },
    phone:{
        type : Number,
        required : true
    },
    city:{
        type: String,
        required : true
    },
    state:{
        type : String,
        required : true
    },
    userType:{
        type: Number,
        required : true
    }
}, { timestamps: true });

const User = mongoose.models.User || mongoose.model('User', Schema);

module.exports = User

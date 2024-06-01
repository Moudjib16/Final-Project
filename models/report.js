const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const reportSchema = new Schema({
     
     driverName: { type: String, required: true, },
     clientName: { type: String, required: true, },
     reason: { type: String, required: true, },
    
    
}, { timestamps: true });

const Report = mongoose.model('Report', reportSchema );

module.exports = Report;
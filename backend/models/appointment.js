const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
    patientName:String,
    age:Number,
    doctor:String,
    specialist:String,
    date:String
});

module.exports = mongoose.model("Appointment",appointmentSchema);
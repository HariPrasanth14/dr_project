const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()

app.use(cors("*"))
app.use(express.json())

// MongoDB connect
mongoose.connect("mongodb://127.0.0.1:27017/doctorDB")
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err))

// Models
const User = require("./models/user")
const Appointment = require("./models/appointment")

// Register API
app.post("/register", async (req,res)=>{
    const user = new User(req.body)
    await user.save()
    res.json("User Registered Successfully")
})

// Login API
app.post("/login", async (req,res)=>{
    const {email,password} = req.body

    const user = await User.findOne({email,password})

    if(user){
        res.json("Login Success")
    }else{
        res.json("Invalid Email or Password")
    }
})

// Book Appointment
app.post("/appointment", async (req,res)=>{
    const appointment = new Appointment(req.body)
    await appointment.save()
    res.json("Appointment Saved")
})

// Get All Appointments
app.get("/appointments", async (req,res)=>{
    const data = await Appointment.find()
    res.json(data)
})

app.listen(5000, ()=>{
    console.log("Server running on port 5000")
})
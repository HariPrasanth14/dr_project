const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);
dns.setDefaultResultOrder("ipv4first");

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

const allowedOrigins = [
  "http://localhost:3000",
  "https://mern-project-obvp.vercel.app"
];

app.use(cors({
  origin: allowedOrigins,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  credentials: true
}));

app.use(express.json());

/* ---------------- MongoDB Connection ---------------- */

let isConnected = false;

async function connectDB() {
  if (isConnected) return;

  try {
    await mongoose.connect(process.env.mongo_uri);
    isConnected = true;
    console.log("MongoDB Connected");
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
}

/* ---------------- Models ---------------- */

const User = require("../models/user");
const Appointment = require("../models/appointment");

/* ---------------- Register ---------------- */

app.get("/",async(req,res)=>{
  res.json("Welcome")
})

app.post("/register", async (req, res) => {
  try {
    await connectDB();

    const user = new User(req.body);
    await user.save();

    res.json({ message: "User Registered Successfully" });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

/* ---------------- Login ---------------- */

app.post("/login", async (req, res) => {
  try {
    await connectDB();

    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password required" });
    }

    const user = await User.findOne({ email, password });

    if (user) {
      return res.json({ message: "Login Success" });
    }

    res.status(401).json({ message: "Invalid Email or Password" });

  } catch (err) {
    console.error("Login Error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

/* ---------------- Book Appointment ---------------- */

app.post("/appointment", async (req, res) => {
  try {
    await connectDB();

    const appointment = new Appointment(req.body);
    await appointment.save();

    res.json({ message: "Appointment Saved" });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

/* ---------------- Get Appointments ---------------- */

app.get("/appointments", async (req, res) => {
  try {
    await connectDB();

    const data = await Appointment.find();
    res.json(data);

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

/* ---------------- Export App ---------------- */

module.exports = app;
const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);
dns.setDefaultResultOrder("ipv4first");

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

/* ---------------- CORS ---------------- */

const allowedOrigins = [
  "http://localhost:3000",
  "https://mern-project-obvp.vercel.app"
  "https://dr-appoinment-three.vercel.app/"
];

app.use(cors({
  origin: allowedOrigins,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  credentials: true
}));

app.use(express.json());

/* ---------------- MongoDB Connection ---------------- */

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {

  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(process.env.mongo_uri, {
      bufferCommands: false,
    }).then((mongoose) => {
      console.log("MongoDB connected");
      return mongoose;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

/* ---------------- Models ---------------- */

const User = require("../models/user");
const Appointment = require("../models/appointment");

/* ---------------- Register ---------------- */

app.post("/register", async (req, res) => {
  try {

    await connectDB();

    const user = new User(req.body);
    await user.save();

    res.json({ message: "User Registered Successfully" });

  } catch (err) {

    console.error("Register error:", err);
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

    if (!user) {
      return res.status(401).json({ message: "Invalid Email or Password" });
    }

    res.json({ message: "Login Success" });

  } catch (err) {

    console.error("Login error:", err);
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

    console.error("Appointment error:", err);
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

    console.error("Fetch appointments error:", err);
    res.status(500).json({ message: "Server error" });

  }
});

/* ---------------- Export ---------------- */

module.exports = app;

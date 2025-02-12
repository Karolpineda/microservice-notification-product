// src/app.js
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const notificationRoutes = require("./routes/notificationRoutes");

const app = express();
app.use(cors());
app.use(express.json());

// Rutas principales
app.use("/notifications", notificationRoutes);

module.exports = app;

const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
require("dotenv").config();

// - Middleware - //
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// - Routes - //
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public", "index.html"));
});
app.get("/photo", (req, res) => {
  res.sendFile(path.join(__dirname, "/public", "photo.html"));
});
app.get("/video", (req, res) => {
  res.sendFile(path.join(__dirname, "/public", "video.html"));
});
app.get("/beauty", (req, res) => {
  res.sendFile(path.join(__dirname, "/public", "beauty.html"));
});
app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "/public", "contact.html"));
});

// - Server - //
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`[server] running on port ${PORT}`));

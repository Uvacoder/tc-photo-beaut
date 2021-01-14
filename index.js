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

app.post("/formSubmit", (req, res) => {
  const data = req.body;

  const stmpTransport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.GMAIL_USERNAME,
      pass: process.env.GMAIL_PASSWORD,
    },
  });

  stmpTransport.sendMail(
    {
      from: "Website",
      to: "tcphotobeauty@gmail.com",
      subject: "New Message",
      html: `Timestamp: ${getDate()}<br> Name: ${data.name}<br> Email: ${
        data.email
      }<br> Phone: ${data.phone}<br> Message: ${data.message} `,
    },
    (err, response) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`message sent`);
      }
    },
    stmpTransport.close()
  );
  res.sendFile(path.join(__dirname, "/public", "thanks.html"));
});

// function to return todays date
function getDate() {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dateObj = new Date();
  const month = monthNames[dateObj.getMonth()];
  const day = String(dateObj.getDate()).padStart(2, "0");
  const year = dateObj.getFullYear();
  const output = month + "\n" + day + "," + year;

  return output;
}

// - Server - //
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`[server] running on port ${PORT}`));

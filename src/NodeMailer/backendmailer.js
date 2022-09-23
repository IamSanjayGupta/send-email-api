const nodemailer = require("nodemailer");
const express = require("express");

// Message object

const app = express.Router();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/", (req, res) => {
  const { auth, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth,
  });

  transporter.sendMail(message, (err, info) => {
    if (err) {
      return res.status(500).send("Error occurred. " + err.message);
    }

    res.send("Message sent: " + info.messageId);
  });
});

module.exports = app;

// return process.exit(1);
// Preview only available when sending through an Ethereal account
// console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

// let message = {
//   from: "Sanjay Gupta <sanjay.g.258@gmail.com>",
//   to: "Sanjay Gupta <sanjayg.8237@gmail.com>",
//   subject: "Nodemailer is unicode friendly ✔",
//   text: "Hello to myself!",
//   html: "<p><b>Hello</b> to myself!</p>",
// };

const nodemailer = require("nodemailer");
const express = require("express");

// Message object

const app = express.Router();

app.get("/", (req, res) => {
  res.send(
    "Hello, welcome to email sending library. Refer the documentation at https://github.com/IamSanjayGupta/send-email-api.git on how to use  "
  );
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

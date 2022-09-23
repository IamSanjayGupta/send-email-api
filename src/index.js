const express = require("express");
const nodemailer = require("./NodeMailer/backendmailer");

const app = express();
const port = 3000;
app.use(express.json());
app.use("/", nodemailer);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

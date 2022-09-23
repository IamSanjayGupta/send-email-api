const express = require("express");
const nodemailer = require("./NodeMailer/backendmailer");

const app = express();
const PORT = process.env.PORT || 8080;
app.use(express.json());
app.use("/", nodemailer);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

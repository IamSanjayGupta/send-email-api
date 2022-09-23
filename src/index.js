const express = require("express");
const nodemailer = require("./NodeMailer/backendmailer");
const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json());
app.use("/", nodemailer);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

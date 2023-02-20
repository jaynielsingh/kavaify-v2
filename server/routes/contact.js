require("dotenv").config();

const express = require("express");
var router = express.Router();
const nodemailer = require("nodemailer");

router.get("/contact", async (req, res, next) => {
  res.send("This is the contact route ");
});

router.post("/contact", async (req, res, next) => {
  const { name, email, message } = req.body;
  console.log(req.body);
  console.log(name, email, message);
  // console.log(
  //   `the name is ${name} and email is ${email} and message is ${message}`
  // );
  const testAccount = await nodemailer.createTestAccount();
  const transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com", // hostname
    secureConnection: false, // TLS requires secureConnection to be false
    port: 587, // port for secure SMTP
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
    tls: {
      ciphers: "SSLv3",
    },
  });

  const info = await transporter.sendMail({
    from: process.env.MY_EMAIL,
    to: "jaynielsingh@yahoo.com",
    subject: name,
    text: `Name: ${name} \nEmail: ${email} \nMessage: ${message}`,
  });
  console.log("Message Sent: %s", info.messageId);



  // res.json(message);
});

module.exports = router;

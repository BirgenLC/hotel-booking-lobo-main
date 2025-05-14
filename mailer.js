const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  host: "process.env.HOST",
  port: process.env.PORT ? parseInt(process.env.PORT) : 465,
  secure: true,
  auth: {
    user: process.env.SENDER,
    pass: process.env.PASSWORD,
  },
});

transporter.sendMail(
  {
    from: process.env.SENDER,
    to: "academy@eldohub.co.ke",
    subject: "Test Email:OTP",
    text: "This is a test email sent using node mailer from Lobo class.",
  },
  (error, info) => {
    if (error) {
      return console.log("Error occurred:" + error.message);
    }
    console.log("Email sent successfully:" + info.response);
  }
);

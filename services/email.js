// services/email.js

const nodemailer = require('nodemailer');
const dotenv = require('dotenv').config({path: __dirname + "/.env"});

// Note this only works if less secure apps are
// enabled with Google
const _transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

const EmailService = {};

EmailService.send = (options) => {
  return new Promise((resolve, reject) => {

    // Send the mail using the transport
    _transporter.sendMail(options, (err, info) => {
      err ? reject(err) : resolve(info);
    });
  });
};

module.exports = EmailService;

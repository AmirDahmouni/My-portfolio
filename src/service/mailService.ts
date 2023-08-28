var nodemailer = require("nodemailer");
var smtpTransport = require('nodemailer-smtp-transport');

export async function sendMail(name: string, email: string, message: string) {

  var transporter = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
    authMethod: 'PLAIN',
  }));

  var mailOptions = {
    from: email,
    to: process.env.MY_EMAIL,
    subject: name,
    text: message,
  };

  await transporter.sendMail(mailOptions);
}
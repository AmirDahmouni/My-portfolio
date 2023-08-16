var nodemailer = require("nodemailer");
//-----------------------------------------------------------------------------
export async function sendMail(name:string, email:string, message:string) {
  console.log("===============>",name,email,message)
  var transporter = nodemailer.createTransport({
    service: "SMPT",
    port: 587,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  var mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: name,
    text: message,
  };

  transporter.sendMail(mailOptions, function (error:string, info:string) {
    if (error) {
      throw new Error(error);
    } else {
      console.log("sucess");
      return true;
    }
  });
}
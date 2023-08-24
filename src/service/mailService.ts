var nodemailer = require("nodemailer");
//-----------------------------------------------------------------------------
export async function sendMail(name:string, email:string, message:string) {
  
  var transporter = nodemailer.createTransport({
    service:'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  var mailOptions = {
    from: email,
    to: process.env.MY_EMAIL,
    subject: name,
    text: message,
  };

  console.log(mailOptions)

  transporter.sendMail(mailOptions, function (error:string, info:string) {
    if (error) {
      console.log(error);
      throw new Error(error);
    } else {
      console.log("sucess");
      return true;
    }
  });
}
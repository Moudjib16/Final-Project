const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: "kujo78311@gmail.com",
      pass: "cmah awrb hoaz dncr",
    },
  });
  
  // async..await is not allowed in global scope, must use a wrapper
  async function main() {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: 'kujo78311@gmail.com    ', // sender address
      to: "zerrouguemoudjib@gmail.com", // list of receivers
      subject: "Password Recovery Code", // Subject line
      text: "Guess What ??? IT WORKED !!!!!", // plain text body
      html: "<p>Your password recovery unique code : <b>454545<b></p><br><br><p>WARNING: Do NOT Share This Code</p>", // html body
    });
  
    console.log("Message sent: %s", info.messageId);
    // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
  }
  
  main().catch(console.error);

 
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "kujo78311@gmail.com",
    pass: "cmah awrb hoaz dncr",
  },
});

// Function to generate a random token
const generateToken = () => {
  return Math.floor(Math.random() * 900000) + 100000;
};

// Function to send email with token
const sendEmailWithToken = async (email) => {
  try {
    const token = generateToken();

    // Send email with token
    const info = await transporter.sendMail({
      from: 'kujo78311@gmail.com',
      to: email,
      subject: "Password Recovery Code",
      html: `<p>Your password recovery unique code: <b>${token}</b></p><br><br><p>WARNING: Do NOT Share This Code</p>`,
    });

    console.log("Message sent: %s", info.messageId);
    return token; // Return the token for further processing if needed
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send email');
  }
};

module.exports = sendEmailWithToken;

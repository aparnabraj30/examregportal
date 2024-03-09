// require('dotenv').config();
// const nodemailer = require('nodemailer');

// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.GMAIL_APP_PASSWORD,
//   },
// });

// const sendEmail = async (receiverEmail, file) => {
//     const mailOptions = {
//       from: process.env.EMAIL_USER,
//       to: receiverEmail, 
//       subject: 'Test Result',
//       text: 'Please find the test result attached.',
//     };
  
//     if (file) {
//       mailOptions.attachments = [
//         {
//           filename: file.name,
//           content: file.content,
//         },
//       ];
//     }
  
//     try {
//         await transporter.verify();
//         const info = await transporter.sendMail(mailOptions);
//         console.log('Email sent:', info.response);
//         return true;
//       } catch (error) {
//         console.error('Error sending email:', error.message);
//         console.error('Error stack trace:', error.stack);
//         return false;
//       }
//     };
  
//   module.exports = sendEmail;
  
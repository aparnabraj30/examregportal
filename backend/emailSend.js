// const express = require('express');
// const multer = require('multer');
// const nodemailer = require('nodemailer');
// const path = require('path');

// const app = express();
// const PORT = process.env.PORT || 8000;

// // Multer configuration for handling file uploads
// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });

// // Nodemailer configuration for sending emails
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.EMAIL_USER,  // Your Gmail email address
//     pass: process.env.EMAIL_PASSWORD,        // Your Gmail password
//   },
// });

// // Routes
// app.post('/api/email/send-result', async (req, res) => {
//   try {
//     const { receiverEmail, fileContent } = req.body;

//     if (!receiverEmail || !fileContent) {
//       return res.status(400).json({ error: 'Receiver email and file content are required' });
//     }

//     const attachment = Buffer.from(fileContent, 'base64');

//     const mailOptions = {
//       from: process.env_EMAIL_USER,  // Your Gmail email address
//       to: receiverEmail,
//       subject: 'Uploaded PDF Result',
//       text: 'Please find the attached PDF file.',
//       attachments: [
//         {
//           filename: 'result.pdf',
//           content: attachment,
//           encoding: 'base64',
//         },
//       ],
//     };

//     await transporter.sendMail(mailOptions);

//     res.json({ success: true, message: 'Result sent successfully' });
//   } catch (error) {
//     console.error('Error sending email:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// module.exports = app;

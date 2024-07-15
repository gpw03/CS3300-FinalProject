const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configure nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail', // Use the email service you prefer
  auth: {
    user: 'your-email@gmail.com', // Your email
    pass: 'your-email-password', // Your email password or app-specific password
  },
});

// Endpoint to handle bid submissions
app.post('/submit-bid', (req, res) => {
  const { name, email, phone, creditData, bidData } = req.body;

  // Email options
  const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'recipient-email@example.com',
    subject: 'New Bid Submitted',
    text: `A new bid has been submitted by ${name}.
           Email: ${email}
           Phone: ${phone}
           Credit Card: ${creditData}
           Bid Amount: ${bidData}`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Bid submitted and email sent successfully');
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});


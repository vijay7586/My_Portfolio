const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const CONTACT_EMAIL = process.env.EMAIL_TO || 'vijayadurgareddyp@gmail.com';
const hasMongo = Boolean(process.env.MONGODB_URI && !process.env.MONGODB_URI.includes('<db_password>'));
const hasEmail = Boolean(process.env.EMAIL_USER && process.env.EMAIL_PASS);

let Contact = null;

if (hasMongo) {
  mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('MongoDB connection error:', err));

  const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
    createdAt: { type: Date, default: Date.now }
  });

  Contact = mongoose.model('Contact', contactSchema);
} else {
  console.warn('MongoDB is not configured. Messages will still be emailed when possible.');
}

app.use(cors());
app.use(express.json());

const transporter = hasEmail
  ? nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    })
  : null;

app.get('/api/health', (_req, res) => {
  res.json({
    ok: true,
    mongo: hasMongo,
    email: hasEmail
  });
});

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    if (Contact) {
      try {
        const contact = new Contact({ name, email, message });
        await contact.save();
      } catch (dbError) {
        console.error('Could not store contact message:', dbError);
      }
    }

    if (!transporter) {
      return res.status(503).json({
        error: 'Email is not configured. Set EMAIL_USER and a Gmail App Password in EMAIL_PASS.'
      });
    }

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: CONTACT_EMAIL,
      replyTo: email,
      subject: `New portfolio message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${String(message).replace(/</g, '&lt;')}</p>
      `
    });

    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to send email. Check Gmail App Password settings.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

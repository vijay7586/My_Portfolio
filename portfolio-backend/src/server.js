const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const path = require('path');
const mongoose = require('mongoose');
const assistantRouter = require('./routes/assistant');
const { assistantRateLimiter } = require('./middleware/rateLimiter');
const { errorHandler } = require('./middleware/errorHandler');

dotenv.config({ path: path.join(__dirname, '..', '.env') });

const app = express();
const PORT = process.env.PORT || 5050;
const CONTACT_EMAIL = process.env.EMAIL_TO || 'vijayadurgareddyp@gmail.com';
const hasMongo = Boolean(process.env.MONGODB_URI && !process.env.MONGODB_URI.includes('<db_password>'));
const hasEmail = Boolean(process.env.EMAIL_USER && process.env.EMAIL_PASS);

const defaultOrigins = [
  'http://localhost:3000',
  'http://127.0.0.1:3000',
  'http://localhost:5173',
  'https://vijay7586.github.io',
];

const extraOrigins = String(process.env.FRONTEND_URL || process.env.ALLOWED_ORIGIN || '')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean);

const corsOrigins = [...new Set([...defaultOrigins, ...extraOrigins])];

let Contact = null;

if (hasMongo) {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('MongoDB connection error:', err.message));

  const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
    createdAt: { type: Date, default: Date.now },
  });

  Contact = mongoose.model('Contact', contactSchema);
} else {
  console.warn('MongoDB is not configured. Messages will still be emailed when possible.');
}

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || corsOrigins.includes(origin)) {
        callback(null, true);
        return;
      }
      callback(new Error('Not allowed by CORS'));
    },
  })
);
app.use(express.json({ limit: '32kb' }));

const transporter = hasEmail
  ? nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })
  : null;

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    mongo: hasMongo,
    email: hasEmail,
    assistant: Boolean(process.env.OPENAI_API_KEY),
    modelConfigured: Boolean(process.env.OPENAI_MODEL || process.env.OPENAI_API_KEY),
  });
});

app.use('/api/assistant', assistantRateLimiter, assistantRouter);

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
        console.error('Could not store contact message');
      }
    }

    if (!transporter) {
      return res.status(503).json({
        error: 'Email is not configured. Set EMAIL_USER and a Gmail App Password in EMAIL_PASS.',
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
      `,
    });

    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Contact email failed');
    res.status(500).json({ error: 'Failed to send email. Check Gmail App Password settings.' });
  }
});

app.use(errorHandler);

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});

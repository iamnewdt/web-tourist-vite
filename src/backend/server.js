import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory fallback database for robustness when MongoDB is not running
let memoryDb = [];
let isUsingMongoDB = false;

// Connect to MongoDB
const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/web-tourist';
mongoose.connect(mongoUri)
  .then(() => {
    console.log('💚 Connected to MongoDB successfully.');
    isUsingMongoDB = true;
  })
  .catch((err) => {
    console.warn('⚠️  MongoDB connection failed. Switching to robust in-memory database fallback.');
    console.warn(`Reason: ${err.message}`);
    isUsingMongoDB = false;
  });

// Define Mongoose Schema and Model
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', contactSchema);

// Configure Nodemailer
const smtpConfig = {
  host: process.env.SMTP_HOST || 'smtp.ethereal.email',
  port: parseInt(process.env.SMTP_PORT || '587', 10),
  auth: {
    user: process.env.SMTP_USER || '',
    pass: process.env.SMTP_PASS || ''
  }
};

let transporter;

// Create transporter gracefully
if (smtpConfig.auth.user && smtpConfig.auth.pass) {
  transporter = nodemailer.createTransport(smtpConfig);
  console.log(`📧 Nodemailer configured with SMTP host: ${smtpConfig.host}`);
} else {
  console.log('ℹ️  No real SMTP credentials supplied. Email details will be logged to console.');
}

// REST APIs
// 1. Health check
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'UP',
    database: isUsingMongoDB ? 'MongoDB' : 'In-Memory Fallback',
    timestamp: new Date()
  });
});

// 2. Submit contact form
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields (name, email, message) are required.' });
  }

  try {
    let savedRecord;
    const recordData = { name, email, message, createdAt: new Date() };

    if (isUsingMongoDB) {
      const newContact = new Contact(recordData);
      savedRecord = await newContact.save();
    } else {
      savedRecord = { id: memoryDb.length + 1, ...recordData };
      memoryDb.push(savedRecord);
    }

    console.log(`📩 New message saved:`, savedRecord);

    // Attempt to send email
    const mailOptions = {
      from: `"Thailand Portal" <${email}>`,
      to: process.env.RECEIVER_EMAIL || 'admin@example.com',
      subject: `New Inquiry from ${name}`,
      text: `You have received a new message from the Thailand Travel Portal.\n\n` +
            `Name: ${name}\n` +
            `Email: ${email}\n` +
            `Message:\n${message}\n\n` +
            `Received at: ${new Date().toLocaleString()}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; border: 1px solid #ddd; padding: 20px; border-radius: 10px;">
          <h2 style="color: #04AA6D; border-bottom: 2px solid #04AA6D; padding-bottom: 10px;">New Website Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Message:</strong></p>
          <blockquote style="background: #f9f9f9; border-left: 5px solid #ccc; padding: 10px 15px; margin: 10px 0;">
            ${message.replace(/\n/g, '<br>')}
          </blockquote>
          <hr style="border: 0; border-top: 1px solid #eee; margin-top: 20px;" />
          <p style="font-size: 0.8rem; color: #888;">Submitted via Thailand Travel Portal at ${new Date().toLocaleString()}</p>
        </div>
      `
    };

    if (transporter) {
      try {
        await transporter.sendMail(mailOptions);
        console.log(`✉️ Email successfully dispatched to ${mailOptions.to}`);
      } catch (emailErr) {
        console.error('❌ Failed to dispatch email:', emailErr.message);
      }
    } else {
      // Mock Console Dispatch
      console.log('============= MOCK EMAIL DISPATCH =============');
      console.log(`TO: ${mailOptions.to}`);
      console.log(`SUBJECT: ${mailOptions.subject}`);
      console.log(`CONTENT: ${mailOptions.text}`);
      console.log('================================================');
    }

    res.status(200).json({ success: true, message: 'Message sent successfully!' });

  } catch (error) {
    console.error('❌ Error handling contact form submission:', error);
    res.status(500).json({ error: 'An error occurred while saving your message. Please try again later.' });
  }
});

// 3. View message listings (Helper dev endpoint)
app.get('/api/contact-messages', async (req, res) => {
  try {
    if (isUsingMongoDB) {
      const messages = await Contact.find().sort({ createdAt: -1 });
      return res.status(200).json(messages);
    } else {
      // Return memory db sorted newest first
      const messages = [...memoryDb].reverse();
      return res.status(200).json(messages);
    }
  } catch (error) {
    console.error('❌ Failed to fetch messages:', error);
    res.status(500).json({ error: 'Failed to retrieve messages.' });
  }
});

// Start Express App
app.listen(PORT, () => {
  console.log(`🚀 Server successfully launched on http://localhost:${PORT}`);
});

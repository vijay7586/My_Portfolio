const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Portfolio Backend API!' });
});

// Contact form endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ 
      success: false, 
      message: 'Please provide all required fields' 
    });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ 
      success: false, 
      message: 'Please provide a valid email address' 
    });
  }

  // Here you would typically:
  // 1. Save to database
  // 2. Send email notification
  // 3. Integrate with email service

  // For now, just return success
  res.status(200).json({
    success: true,
    message: 'Message received successfully',
    data: {
      name,
      email,
      message
    }
  });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 
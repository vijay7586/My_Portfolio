const express = require('express');
const { askPortfolioAssistant } = require('../services/openaiService');

const MAX_MESSAGE_LENGTH = 500;
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const raw = req.body?.message ?? req.body?.question;
    if (typeof raw !== 'string') {
      return res.status(400).json({ error: 'Message must be a string.' });
    }

    const message = raw.trim();
    if (!message) {
      return res.status(400).json({ error: 'Message is required.' });
    }
    if (message.length > MAX_MESSAGE_LENGTH) {
      return res.status(400).json({
        error: `Please keep questions under ${MAX_MESSAGE_LENGTH} characters.`,
      });
    }

    if (!process.env.OPENAI_API_KEY) {
      return res.status(503).json({ error: 'Assistant is temporarily unavailable.' });
    }

    const result = await askPortfolioAssistant(message);
    return res.json({
      answer: result.answer,
      actions: result.actions || [],
    });
  } catch (error) {
    console.error('Assistant request failed:', error?.code || error?.message || 'unknown');
    return res.status(503).json({ error: 'Assistant is temporarily unavailable.' });
  }
});

module.exports = router;
module.exports.MAX_MESSAGE_LENGTH = MAX_MESSAGE_LENGTH;

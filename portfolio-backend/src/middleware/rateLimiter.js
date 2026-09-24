const rateLimit = require('express-rate-limit');

const assistantRateLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: Number(process.env.ASSISTANT_RATE_LIMIT || 10),
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many requests. Please try again shortly.' },
});

module.exports = { assistantRateLimiter };

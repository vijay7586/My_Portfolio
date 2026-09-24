function errorHandler(err, _req, res, _next) {
  console.error('Unhandled error:', err?.code || err?.message || 'unknown');
  if (err?.message === 'Not allowed by CORS') {
    return res.status(403).json({ error: 'Request origin is not allowed.' });
  }
  res.status(500).json({ error: 'Something went wrong. Please try again.' });
}

module.exports = { errorHandler };

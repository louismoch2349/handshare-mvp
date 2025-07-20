const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Connect to MongoDB (you'll add your URI later)
mongoose.connect(process.env.MONGODB_URI || 'your_connection_string_here');

app.get('/api/test', (req, res) => {
  res.json({ status: 'API is working!' });
});

app.listen(3000, () => console.log('Server running'));

const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Load quotes from the JSON file
const quotesFilePath = path.join(__dirname, 'quotes.json');
const quotes = JSON.parse(fs.readFileSync(quotesFilePath, 'utf-8'));

// Endpoint to get a random quote
app.get('/quote', (req, res) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  res.json(randomQuote);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Use cors middleware
app.use(cors());

// Load quotes from the JSON file
const quotesFilePath = path.join(__dirname, 'quotes.json');
const quotes = JSON.parse(fs.readFileSync(quotesFilePath, 'utf-8'));

// List of random colors
const colors = [
  "#F6E4D0", // Soft peach
  "#F7B3A0", // Soft coral
  "#E0C1D1", // Muted lavender
  "#D46B3B", // Muted terracotta
  "#9B4D28", // Deep rust
  "#4B3F33", // Dark brown
  "#4A4A48", // Charcoal gray
  "#F1C6A1", // Warm light beige
  "#D8A7A2", // Dusty rose
  "#C2A0C0"  // Soft mauve
];

// Endpoint to get a random quote
app.get('/quote', (req, res) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  res.json(randomQuote);
});

// Endpoint to get a random color
app.get('/color', (req, res) => {
  const randomColorIndex = Math.floor(Math.random() * colors.length);
  const randomColor = colors[randomColorIndex];
  res.json({ color: randomColor });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

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

// List of random text colors (in HEX format)
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

// Function to generate background color with 20% opacity
function getBackgroundColor(hexColor) {
  // Convert HEX to RGB
  const r = parseInt(hexColor.slice(1, 3), 16);
  const g = parseInt(hexColor.slice(3, 5), 16);
  const b = parseInt(hexColor.slice(5, 7), 16);
  
  // Return RGBA value with 20% opacity
  return `rgba(${r}, ${g}, ${b}, 0.2)`;
}

// Endpoint to get a random quote
app.get('/quote', (req, res) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  res.json(randomQuote);
});

// Endpoint to get a random color (text color and background color)
app.get('/color', (req, res) => {
  const randomColorIndex = Math.floor(Math.random() * colors.length);
  const textColor = colors[randomColorIndex];
  const backgroundColor = getBackgroundColor(textColor);
  
  res.json({
    textColor: textColor,
    backgroundColor: backgroundColor
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

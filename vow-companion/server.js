// server.js
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Symbol data endpoint
const symbols = require('./symbols.json');
app.get('/api/symbols', (req, res) => {
    res.json(symbols);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
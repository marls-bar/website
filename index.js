// index.js
const path = require('path');
const express = require('express');
const app = express();
const resumeRouter = require('./routes/resume');

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Set the views directory
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.static('public'));

// Routes
app.use('/', resumeRouter);

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
// resume.js
const fs = require('fs');
const express = require('express');
const router = express.Router();

// Resume route
router.get('/', (req, res) => {
  // Read the resume.json file
  fs.readFile('resume.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading resume data:', err);
      res.status(500).send('Internal Server Error');
      return;
    }

    // Parse the JSON data
    const resumeData = JSON.parse(data);

    // Render the resume.ejs template and pass the resume data
    res.render('resume.ejs', { resumeData });
  });
});

module.exports = router;

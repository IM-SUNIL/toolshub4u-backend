const express = require('express');
const router = express.Router();
const { addTool } = require('../controllers/tools.controller');  // Import the addTool function from controller

// Dummy route
router.get('/all', (req, res) => {
  res.json([
    { name: 'PDF Merger', type: 'PDF', free: true },
    { name: 'YouTube Downloader', type: 'Video', free: true }
  ]);
});

// Add a new tool
router.post('/add', addTool);  // This will handle the POST request to add a tool

module.exports = router;

const express = require('express');
const router = express.Router();
const {
  addTool,
  getAllTools,
  getToolById
} = require('../controllers/tools.controller');

// ➕ POST: Add a new tool
router.post('/add', addTool);

// 📥 GET: Retrieve all tools
router.get('/all', getAllTools);

// 🔍 GET: Retrieve a specific tool by ID
router.get('/:id', getToolById);

module.exports = router;

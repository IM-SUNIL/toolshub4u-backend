const express = require('express');
const router = express.Router();
const { addTool, getAllTools, getToolById } = require('../controllers/tools.controller');

// 🛠 Add a new tool
router.post('/add', addTool);

// 📥 Get all tools
router.get('/all', getAllTools);

// 🔍 Get a tool by ID
router.get('/:id', getToolById);

module.exports = router;

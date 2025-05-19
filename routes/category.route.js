const express = require('express');
const router = express.Router();
const { addCategory, getAllCategories } = require('../controllers/category.controller');

// POST /api/categories/add — Add new category
router.post('/add', addCategory);

// GET /api/categories/all — Get all categories
router.get('/all', getAllCategories);

module.exports = router;

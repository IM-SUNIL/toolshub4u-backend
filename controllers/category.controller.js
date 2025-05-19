const Category = require('../models/Category.model');

// POST: Add new category
const addCategory = async (req, res) => {
  try {
    const { name, slug, description, image, tags } = req.body;

    if (!name || !slug) {
      return res.status(400).json({ message: "Name aur slug required hain!" });
    }

    const existing = await Category.findOne({ slug });
    if (existing) {
      return res.status(409).json({ message: "Slug already exists bhai!" });
    }

    const newCategory = new Category({
      name,
      slug,
      description,
      image,
      tags
    });

    await newCategory.save();

    res.status(201).json({
      message: "Category added successfully!",
      category: newCategory
    });
  } catch (error) {
    console.error("Error in addCategory:", error);
    res.status(500).json({ message: "Server error aagaya bhai" });
  }
};

// GET: Get all categories
const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find().sort({ createdAt: -1 });
    res.status(200).json({ categories });
  } catch (error) {
    console.error("Error in getAllCategories:", error);
    res.status(500).json({ message: "Server error while fetching categories" });
  }
};

// ✅ This is important
module.exports = {
  addCategory,
  getAllCategories
};

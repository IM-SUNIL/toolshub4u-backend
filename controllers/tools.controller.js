const Tool = require('../models/Tool.model');  // Tool model import

// ➕ Add a new tool
const addTool = async (req, res) => {
  try {
    const { name, description, url, image, categoryId, isFree, tags, rating } = req.body;

    const newTool = new Tool({
      name,
      description,
      url,
      image,
      categoryId,
      isFree,
      tags,
      rating,
    });

    await newTool.save();

    res.status(201).json({
      message: 'Tool added successfully!',
      tool: newTool,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Failed to add tool',
      error: error.message,
    });
  }
};

// 📥 Get all tools
const getAllTools = async (req, res) => {
  try {
    const tools = await Tool.find().populate('categoryId');
    res.status(200).json({ tools });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to fetch tools',
      error: error.message,
    });
  }
};

// 🔍 Get a single tool by ID
const getToolById = async (req, res) => {
  try {
    const tool = await Tool.findById(req.params.id).populate('categoryId');
    if (!tool) {
      return res.status(404).json({ message: 'Tool not found' });
    }
    res.status(200).json(tool);
  } catch (error) {
    res.status(500).json({
      message: 'Failed to fetch tool',
      error: error.message,
    });
  }
};

module.exports = {
  addTool,
  getAllTools,
  getToolById,
};

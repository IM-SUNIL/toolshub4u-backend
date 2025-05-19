const Tool = require('../models/Tool.model'); // Tool model import

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
      success: true,
      data: newTool,
      error: null,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      data: null,
      error: error.message || 'Failed to add tool',
    });
  }
};

// 📥 Get all tools
const getAllTools = async (req, res) => {
  try {
    const tools = await Tool.find().populate('categoryId');
    res.status(200).json({
      success: true,
      data: tools,
      error: null,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      data: null,
      error: error.message || 'Failed to fetch tools',
    });
  }
};

// 🔍 Get a single tool by ID
const getToolById = async (req, res) => {
  try {
    const tool = await Tool.findById(req.params.id).populate('categoryId');

    if (!tool) {
      return res.status(404).json({
        success: false,
        data: null,
        error: 'Tool not found',
      });
    }

    res.status(200).json({
      success: true,
      data: tool,
      error: null,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      data: null,
      error: error.message || 'Failed to fetch tool',
    });
  }
};

module.exports = {
  addTool,
  getAllTools,
  getToolById,
};

const Tool = require('../models/Tool.model');  // Tool model import

// Add a new tool
const addTool = async (req, res) => {
  try {
    const { name, description, url, image, categoryId, isFree, tags, rating } = req.body;

    // Create a new tool instance
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

    // Save the tool to MongoDB
    await newTool.save();

    // Respond with success
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

module.exports = { addTool };

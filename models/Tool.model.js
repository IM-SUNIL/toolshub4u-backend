const mongoose = require('mongoose');

const toolSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  url: {
    type: String,
    required: true,
  },
  image: String,
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category', // Reference to Category model
  },
  isFree: {
    type: Boolean,
    default: true,
  },
  tags: [String],
  rating: {
    type: Number,
    min: 1,
    max: 5,
    default: 0,
  }
}, {
  timestamps: true // Automatically adds createdAt & updatedAt
});

const Tool = mongoose.model('Tool', toolSchema);

module.exports = Tool;

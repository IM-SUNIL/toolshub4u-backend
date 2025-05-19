const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    default: ''
  },
  tags: [String]
}, {
  timestamps: { createdAt: true, updatedAt: false } // sirf createdAt chahiye
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;

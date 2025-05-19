const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const categoryRoutes = require('./routes/category.route');
const toolsRoutes = require('./routes/tools.route');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Default route to check server status
app.get("/", (req, res) => {
  res.send("Server is running! 🚀");
});

// Routes
app.use('/api/tools', toolsRoutes);
app.use('/api/categories', categoryRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("🟢 MongoDB connected successfully");
  // Server start after DB connect
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
})
.catch((err) => {
  console.error("🔴 MongoDB connection failed:", err);
});

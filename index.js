const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const rateLimit = require('express-rate-limit');

dotenv.config();

const app = express();

// Rate limiter setup
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 mins
  max: 100
});
app.use(limiter);

// Middleware
app.use(express.json());

// Database connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));
  
// Routes
const urlRoutes = require('./routes/url');
app.use('/', urlRoutes);

// Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;

// Let me know if you want the routes, controller, and model files in full for your upcoming backend tasks and system design revision today.

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true // 👈 removes leading/trailing spaces
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true, // 👈 stores email in lowercase
    trim: true
  },

  password: {
    type: String,
    required: true,
    minlength: 6 // 👈 good to enforce minimum password length
  },

  role: {
    type: String,
    enum: ['admin', 'user'],
    default: 'user',
    required: true
  }
}, { timestamps: true }); // 👈 adds createdAt and updatedAt automatically

module.exports = mongoose.model('User', userSchema);

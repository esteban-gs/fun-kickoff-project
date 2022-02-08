const mongoose = require('mongoose');
const User = require('./User');

const profileSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'User'
  },
  availabilities: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Availability'
    }
  ]
});

module.exports = Profile = mongoose.model("profile", profileSchema);

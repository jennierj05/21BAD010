const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true,
  },
  ownerName: {
    type: String,
    required: true,
  },
  ownerEmail: {
    type: String,
    required: true,
    unique: true,
  },
  rollNo: {
    type: String,
    required: true,
  },
  accesscode: {
    type: String,
    required: true,
  },
});
const User = mongoose.model('User', userSchema);
module.exports = User;

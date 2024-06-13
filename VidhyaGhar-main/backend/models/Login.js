const mongoose = require('mongoose');

// Define the Login schema
const loginSchema = new mongoose.Schema({
  studentId: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  // You can add more fields as needed
});

// Create the Login model
const Login = mongoose.model('students', loginSchema);

module.exports = Login;

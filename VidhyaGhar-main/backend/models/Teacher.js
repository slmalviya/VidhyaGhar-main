const mongoose = require('mongoose');

// Define the Teacher schema
const teacherSchema = new mongoose.Schema({
  teacherId: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  fatherName: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  teachingExperience: {
    type: Number,
    required: true,
  },
  mobileNumber: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  // You can add more fields as needed
});

// Create the Teacher model
const Teacher = mongoose.model('Teacher', teacherSchema);

module.exports = Teacher;

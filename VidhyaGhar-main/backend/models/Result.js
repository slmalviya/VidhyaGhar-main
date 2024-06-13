const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
  studentId: {
    // type: mongoose.Schema.Types.ObjectId,
    type: String,
    ref: 'Student', // Reference to the Student model
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  marks: {
    type: Number,
    required: true,
  },
});

const Result = mongoose.model('Result', resultSchema);

module.exports = Result;

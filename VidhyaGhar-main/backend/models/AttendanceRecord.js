const mongoose = require('mongoose');

// Define a schema for attendance records
const attendanceSchema = new mongoose.Schema({
  studentId: {
    type: String,
    ref: 'Student',
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ['present', 'absent', 'late'],
    required: true,
  },
});

// Create a model for attendance records
const AttendanceRecord = mongoose.model('AttendanceRecord', attendanceSchema);

module.exports = AttendanceRecord;

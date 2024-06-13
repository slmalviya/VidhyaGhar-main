const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema({
  userType: {
    type: String,
    // required: true,
    enum: ['Teacher', 'Student'],
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: 'Pending', // Initial status can be 'Pending'
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Complaint = mongoose.model('Complaint', complaintSchema);

module.exports = Complaint;

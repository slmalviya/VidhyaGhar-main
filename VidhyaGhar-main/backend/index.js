const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

// Connect to your local MongoDB instance
// mongoose.connect('mongodb://localhost:27017/schoolDB', {
mongoose.connect('mongodb+srv://mistrysachin185:Mongo%40123@cluster0.bwkyxxx.mongodb.net/SchoolDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define the schema for attendance records


// Create a model for attendance records
const AttendanceRecord = require('./models/AttendanceRecord');

// REST API endpoints
app.post('/mark-attendance', async (req, res) => {
  const { studentId, date, status } = req.body;

  try {
    // Create and save the attendance record
    const attendanceRecord = new AttendanceRecord({
      studentId,
      date,
      status,
    });

    await attendanceRecord.save();

    res.status(200).json(attendanceRecord);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error marking attendance' });
  }
});

app.get('/get-attendance/:studentId', async (req, res) => {
  const studentId = req.params.studentId;

  try {
    // Retrieve and send the attendance records for the specified student
    const records = await AttendanceRecord.find({ studentId });
    res.json(records);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching attendance records' });
  }
});

app.get('/students', async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching student data' });
  }
});



// code for result management


// Import the Result schema
const Result = require('./models/Result'); // Replace with the actual path to your schema

// Create API endpoints
app.post('/add-result', async (req, res) => {
  const { studentId, subject, marks } = req.body;

  try {
    const result = new Result({ studentId, subject, marks });
    await result.save();
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error adding result' });
  }
});

app.put('/update-result/:resultId', async (req, res) => {
  const resultId = req.params.resultId;
  const { marks } = req.body;

  try {
    const result = await Result.findByIdAndUpdate(resultId, { marks }, { new: true });
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error updating result' });
  }
});

app.get('/get-results/:studentId', async (req, res) => {
  const studentId = req.params.studentId;

  try {
    const results = await Result.find({ studentId });
    res.json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching results' });
  }
});


app.get('/all-result', async (req, res) => {
  try {
    const showresult = await Result.find();
    res.json(showresult);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching student data' });
  }
});



//Code for complaint

const Complaint = require('./models/Complaint'); // Adjust the path to your Complaint model

// Submit a complaint
app.post('/submit-complaint', async (req, res) => {
  const { userType, title, description } = req.body;

  
  try {
    const complaint = new Complaint({ userType, title, description });
    await complaint.save();
    res.status(201).json(complaint);
  } catch (error) {
    console.error('Error submitting complaint:', error);
    res.status(500).json({ error: 'Error submitting complaint' });
  }
});

// Get complaints by user ID
app.get('/complaints/', async (req, res) => {
  const userId = req.params.userId;

  try {
    const complaints = await Complaint.find();
    res.json(complaints);
  } catch (error) {
    console.error('Error fetching complaints:', error);
    res.status(500).json({ error: 'Error fetching complaints' });
  }
});



const Teacher = require('./models/Teacher');

// Create a new teacher
app.post('/teachers', async (req, res) => {
  try {
    const teacherData = req.body;
    const teacher = new Teacher(teacherData);
    await teacher.save();
    res.status(201).json(teacher);
  } catch (error) {
    console.error('Error creating teacher:', error);
    res.status(500).json({ error: 'Error creating teacher' });
  }
});




const Student = require('./models/Student');

// Create a new student
app.post('/studentreg', async (req, res) => {
  try {
    const studentData = req.body;
    const student = new Student(studentData);
    await student.save();
    res.status(201).json(student);
  } catch (error) {
    console.error('Error creating student:', error);
    res.status(500).json({ error: 'Error creating student' });
  }
});



const Admin = require('./models/Admin');

// Create a new admin
app.post('/admins', async (req, res) => {
  try {
    const adminData = req.body;
    const admin = new Admin(adminData);
    await admin.save();
    res.status(201).json(admin);
  } catch (error) {
    console.error('Error creating admin:', error);
    res.status(500).json({ error: 'Error creating admin' });
  }
});



app.post('/student-login', async (req, res) => {
  try {
    const { studentId, password } = req.body;
    const user = await Student.findOne({ studentId });
  

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    if (user.password !== password) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    // You can send the user data back as part of   the response if needed
    res.status(200).json({ message: 'Login successful', user });

  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ error: 'Error logging in' });
  }
});



//TEACHER LOG IN API
app.post('/teacher-login', async (req, res) => {
  try {
    const { teacherId, password } = req.body;
    const user = await Teacher.findOne({ teacherId });

  

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    if (user.password !== password) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    // You can send the user data back as part of the response if needed
    res.status(200).json({ message: 'Login successful', user });

  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ error: 'Error logging in' });
  }
});


//ADMIN LOG IN API
app.post('/admin-login', async (req, res) => {
  try {
    const { adminId, password } = req.body;
    const user = await Admin.findOne({ adminId });

  

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    if (user.password !== password) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    // You can send the user data back as part of the response if needed
    res.status(200).json({ message: 'Login successful', user });

  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ error: 'Error logging in' });
  }
});



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

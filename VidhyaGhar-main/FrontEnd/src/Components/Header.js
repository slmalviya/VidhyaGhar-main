import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Contact from './Contact';
import Home from './Home';
import Signup from './Signup';
import Login from './Login';
import Student_login from './Student_login';
import Admin_login from './Admin_login';
import Teacher_login from './Teacher_login';
import Services from './Services';
import Courses from './Courses';


// following portion for admin components 
import Admin_dashboard from './Admin Component/Admin_dashboard';
import Admin_SignUp from './Admin Component/Admin_SignUp'
import Teacher_SignUp from './Admin Component/Teacher_SignUp'
import Student_SignUp from './Admin Component/Student_SignUp';
import Manage_attendence from './Admin Component/Manage_attendence'
import Manage_result from './Admin Component/Manage_result'
import Notice from './Admin Component/Notice'
import Total_students from './Admin Component/Total_students';

// following portion for student components 
import Student_dashboard from './Student Components/Student_dashboard';
import Student_attendence from './Student Components/Student_attendence';
import Student_complaint from './Student Components/Student_complaint';
import Student_notification from './Student Components/Student_notification';
import Student_result from './Student Components/Student_result';

// following portion for Teacher components 
import Teacher_attendence from './Teacher Components/Teacher_attendence';
import Teacher_complaint from './Teacher Components/Teacher_complaint';
import Teacher_marks from './Teacher Components/Teacher_marks';
import Teacher_dashboard from './Teacher Components/Teacher_dashboard';



export default function Header() {
  return (
    <BrowserRouter>
   <Routes>


   <Route path='/' element={<Home/>}>  </Route>
   <Route path='/contact' element={<Contact />}>  </Route>
   <Route path='/signup' element={<Signup />}>  </Route>
   <Route path='/login' element={<Login />}></Route>
   <Route path='/admin' element={<Admin_login />}></Route>
   <Route path='/student' element={<Student_login/>}></Route>
   <Route path='/teacher' element={<Teacher_login />}></Route>
   <Route path='/services' element={<Services />}></Route>
   <Route path='/courses' element={<Courses />}></Route>
   <Route path='/admin/AdminDashboard' element={<Admin_dashboard/>}></Route>
   <Route path='/admin/AdminDashboard/AdminSignUp' element={<Admin_SignUp/>}></Route>
   <Route path='/admin/AdminDashboard/TeacherSignUp' element={<Teacher_SignUp/>}></Route>
   <Route path='/admin/AdminDashboard/StudentSignUp' element={<Student_SignUp/>}></Route>
   <Route path='/admin/AdminDashboard/attendence' element={<Manage_attendence/>}></Route>
   <Route path='/admin/AdminDashboard/result' element={<Manage_result/>}></Route>
   <Route path='/admin/AdminDashboard/notice' element={<Notice/>}></Route>
   <Route path='/admin/AdminDashboard/totalstudents' element={<Total_students/>}></Route>



   <Route path='/student/StudentDashboard' element={<Student_dashboard/>}></Route>
   <Route path='/student/StudentDashboard/attendence' element={<Student_attendence/>}></Route>
   <Route path='/student/StudentDashboard/result' element={<Student_result/>}></Route>
   <Route path='/student/StudentDashboard/notification' element={<Student_notification/>}></Route>
   <Route path='/student/StudentDashboard/complaint' element={<Student_complaint/>}></Route>




   <Route path='/teacher/TeacherDashboard' element={<Teacher_dashboard/>}></Route>
   <Route path='/teacher/TeacherDashboard/attendence' element={<Teacher_attendence/>}></Route>
   <Route path='/teacher/TeacherDashboard/complaint' element={<Teacher_complaint/>}></Route>
   <Route path='/teacher/TeacherDashboard/marks' element={<Teacher_marks/>}></Route>



  

  
</Routes>
   </BrowserRouter>
  )
}

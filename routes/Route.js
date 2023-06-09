import express from "express";

// controllers
import { getStudents, getStudent, getFilteredStudent, addStudent, editStudent, deleteStudent } from "../controller/StudentsController.js";
import { getStudentsFees, getStudentFees, addStudentsFees, editInstallment, deleteInstallment } from "../controller/StudentFeesController.js";
import { addStudentsTest, getStudentsTest, getStudentTest, editStudentTest, deleteTest, getFilteredTests } from "../controller/StudentTestController.js";
import { getStandards, addStandard, addSection, getSections, getDistinctSections, getDistinctStandards } from "../controller/MoreController.js";
import { getAttendence, addAttendence } from "../controller/StudentAttendenceController.js";

// middleware
import { storage,upload } from "../middleware/StudentMiddleware.js";

const route = express.Router();

// students
route.post('/student/getstudent', getStudent); // single student based on id
route.get('/student/getstudents', getStudents); // all students
route.post('/student/getfilteredstudent', getFilteredStudent);// multiple students based on section and division
route.post('/student/addstudent',upload.single(["profile"]), addStudent);
route.post('/student/editstudent',upload.single(["profile"]), editStudent);
route.post('/student/deletestudent', deleteStudent);

// attendence
route.get('/attendence/getattendence', getAttendence);
route.post('/attendence/addattendence/', addAttendence);

// student fees
route.get('/studentsfees/getstudentsfees', getStudentsFees);
route.post('/studentsfees/getstudentfees', getStudentFees);
route.post('/studentsfees/addstudentsfees', addStudentsFees);
// route.post('/studentsfees/deletestudentsfees', deleteStudentsFees);

// student installment
route.post('/studentsfees/editinstallment', editInstallment);
route.post('/studentsfees/deletestudentsinstallment', deleteInstallment);

// student test
route.get('/studentstest/getstudentstest', getStudentsTest);
route.post('/studentstest/getstudenttest', getStudentTest);
route.post('/studentstest/addstudentstest', addStudentsTest);
route.post('/studentstest/getfilteredtests', getFilteredTests);

route.post('/studentstest/editstudenttest', editStudentTest);
route.post('/studentstest/deletetest', deleteTest);

// more
route.get('/more/getstandards', getStandards);
route.post('/more/addstandard', addStandard);

route.get('/more/getsections', getSections);
route.post('/more/addsection', addSection);

route.get('/more/getdistinctstandards', getDistinctStandards);
route.get('/more/getdistinctsections', getDistinctSections);

export default route;
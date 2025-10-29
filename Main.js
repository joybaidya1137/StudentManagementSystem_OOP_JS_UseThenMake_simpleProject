import person from "./Classes/person.js";      
import student from "./Classes/student.js";
import teacher from "./Classes/teacher.js";
import management from "./Classes/Management.js";   

const Management1 = new management();

const student1 = new student('Alice, 20, Female, S1001');
Management1.addStudent(student1);
Management1.searchStudentByID('S1001');


student1.enrollCourse('Mathematics');
student1.enrollCourse('English');
student1.enrollCourse('History');

student1.addGrade('Mathematics', 95);
student1.addGrade('English', 88);
student1.addGrade('History', 85);




const student2 = new student('Bob', 22, 'Male', 'S1002');
student2.enrollCourse('Physics');
student2.enrollCourse('Chemistry');
student2.enrollCourse('Mathematics');


student2.addGrade('Physics', 90);
student2.addGrade('Chemistry', 75);
student2.addGrade('Mathematics', 80);
Management1.addStudent(student2);

const teacher1 = new teacher('Dr. Smith', 40, 'Male', 'T1001');
Management1.addTeacher(teacher1);
const teacher2 = new teacher('Prof. Johnson', 35, 'Female', 'T1002');
Management1.addTeacher(teacher2);

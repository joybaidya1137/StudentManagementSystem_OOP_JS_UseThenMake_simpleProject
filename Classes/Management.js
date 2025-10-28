import student from './student.js';
import teacher from './teacher.js'; 

class management {
    #Students;
    #Teachers;
    constructor() {
        this.#Students = [];
        this.#Teachers = [];
    }

    addStudent(ST) {
        if (ST instanceof student) {
            this.#Students.push(ST);
            console.log(`Student added: ${ST.getName()}`);
        } else {
            console.log(`Invalid student.`);
        }
    }

    addTeacher(TT) {
        if (TT instanceof teacher) {
            this.#Teachers.push(TT);
            console.log(`Teacher added: ${TT.getName()}`);
        } else {
            console.log(`Invalid teacher.`);
        }
    }


    getStudents() {
        return this.#Students;
    }

    getTeachers() {
        return this.#Teachers;
    }

    displayAll() {
        console.log('--- Students ---');
        this.#Students.forEach(s => {
            console.log(`Name: ${s.getName()}, Age: ${s.getAge()} Student ID: ${s.getStudentID()}`);
        });
        console.log('--- Teachers ---');
        this.#Teachers.forEach(t => {
            console.log(`Name: ${t.getName()}, Age: ${t.getAge()} Employee ID: ${t.getEmployeeID()}`);
        });
    }


    searchStudentByID(S_ID) {
        return this.#Students.find(Sr => Sr.getStudentID() === S_ID);
    }

    
    searchTeacherByID(T_ID) {
        return this.#Teachers.find(Tr => Tr.getTeacherID() === T_ID);
    }

    deleteStudentByID(S_ID) {
        this.#Students = this.#Students.filter(Sr => Sr.getStudentID() !== S_ID);
    }

    deleteTeacherByID(T_ID) {
        this.#Teachers = this.#Teachers.filter(Tr => Tr.getTeacherID() !== T_ID);
    }


}

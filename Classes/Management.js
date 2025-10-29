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
        const Students = this.#Students.find(Sr => Sr.getStudentID() === S_ID);
        if (Students !== undefined) {
            return Students;
        } else {
            return null;
        }
    }

    
    searchTeacherByID(T_ID) {
        const Teachers = this.#Teachers.find(Tr => Tr.getTeacherID() === T_ID);
        if (Teachers !== undefined) {
            return Teachers;
        } else {
            return null;
        }

    }

    deleteStudentByID(S_ID) {
        this.#Students = this.#Students.findIndex(Sr => Sr.getStudentID() !== S_ID);
        if (this.#Students !== -1) {
            this.#Students.splice(this.#Students, 1); 
            console.log(`Student deleted: ${S_ID} and ${Students.getName()} and ${Students.getAge()}`);
        } else {
            console.log(`Student not found: ${S_ID}`);
        }

    }

    deleteTeacherByID(T_ID) {
        this.#Teachers = this.#Teachers.filter(Tr => Tr.getTeacherID() !== T_ID);
        if (this.#Teachers !== -1) {
            this.#Teachers.splice(this.#Teachers, 1); 
            console.log(`Teacher deleted: ${T_ID} and ${Teachers.getName()} and ${Teachers.getAge()}`);
        } else {
            console.log(`Teacher not found: ${T_ID}`);
        }   
    }


}
export default management;
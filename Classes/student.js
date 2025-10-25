import person from './person.js';

class student extends person{

    #studentID;
    #courses;
    #grades;

    constructor(name, age, gender, studentID){
        super(name, age, gender);
        this.#studentID = studentID;
        this.#courses =[]; 
        this.#grades = {};
    
    }

    enrollCourse(courseName){
        this.#courses.push(courseName);
    }

    addGrade(courseName, courseGrades){
        this.#grades[courseName] = courseGrades; 
    }

    getAverageGrade(){
        const grades = Object.values(this.#grades);
        if(grades.length === 0){
            return 0;
        }
        else{
            const total = grades.reduce((acc, curr) => acc + curr, 0);
            const result = total / grades.length;
            if (result >= 80) {
                return 'A+';
            }
            else if (80 > result >= 70) {
                return 'A';
            }
            else if (70 > result >= 60) {
                return 'B';
            }
            else {
                return 'C';
            }
        }
    }

    

}

    


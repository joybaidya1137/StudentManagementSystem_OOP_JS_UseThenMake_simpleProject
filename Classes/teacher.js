import person from "./person.js";  

class teacher extends person {
    #subject;
    #employeeID;
    constructor(name, age, gender, subject, employeeID) {
        super(name, age, gender);
        this.#subject = subject;
        this.#employeeID = employeeID;
    }

    getEmployeeID() {
        return this.#employeeID;

    }

    displayInfo() {
        console.log(`Employee ID: ${this.#employeeID}`);
        super.displayInfo();
        console.log(`Subject: ${this.#subject}`);
    }

}
export default teacher;

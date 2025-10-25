import person from "./person";  

class teacher extends person {
    #subject;
    #employeeID;
    constructor(name, age, gender, subject, employeeID) {
        super(name, age, gender);
        this.#subject = subject;
        this.#employeeID = employeeID;
    }

    displayInfo() {
        console.log(`Employee ID: ${this.#employeeID}`);
        super.displayInfo();
        console.log(`Subject: ${this.#subject}`);
    }

    toJSON() {
        return {
            employeeID: this.#employeeID,
            name: this.getName(),
            age: this.getAge(),
            gender: this.getGender(),
            subject: this.#subject
        };
    }
    

}

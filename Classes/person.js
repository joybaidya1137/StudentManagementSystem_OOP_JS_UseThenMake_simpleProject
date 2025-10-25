class Person {
    #name;
    #age;
    #gender;
    
    constructor(name, age, gender){
        this.#name = name;
        this.#age = age;
        this.#gender = gender;
    }

    getName() {
        return this.#name;
    }
    getAge() {
        return this.#age;
    }
    getGender() {
        return this.#gender;
    }
    

    displayInfo() {
        console.log(`Name: ${this.getName()}`);
        console.log(`Age: ${this.getAge()}`);
        console.log(`Gender: ${this.getGender()}`);
    }
}
export default Person;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    constructor(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
    Login() {
        return {
            id: 1,
            name: "John",
            age: 40,
            email: "asfaf"
        };
    }
    getNameWithAddress() {
        return `${this.name} stays at ${this.address}`;
    }
    get empId() {
        return this.id;
    }
    set empId(id) {
        this.id = id;
    }
}
let john = new Employee(1, "John", { street: "1st Main", city: "Bangalore", state: "Karnataka", pin: "560001" });
john.empId = 10;
console.log(john.empId);
class Manager extends Employee {
    constructor(id, name, address, department) {
        super(id, name, address);
        this.department = department;
    }
    getNameWithAddress() {
        return `${this.name} is a manager at ${this.address}`;
    }
}
console.log(john.getNameWithAddress());
let mike = new Manager(2, "Mike", { street: "1st main", city: "Mangalore", state: "Karnataka", pin: "534234" }, "Sales");
console.log(mike.getNameWithAddress());

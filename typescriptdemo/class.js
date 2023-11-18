"use strict";
class Employee {
    constructor(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
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
let john = new Employee(1, "John", "New York");
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
let mike = new Manager(2, "Mike", "London", "Sales");
console.log(mike.getNameWithAddress());

import { Login,User } from "./interface";

interface Address{
    street: string;
    city: string;
    state: string;
    pin: string;
}

class Employee{
    id: number;
    name: string;
    address: Address;
    constructor(id: number, name: string, address: Address){
        this.id=id;
        this.name=name;
        this.address=address;
    }
    Login():User{
        return {
            id: 1,
            name: "John",
            age: 40,
            email: "asfaf"
        }
    }
    getNameWithAddress():string{   
        return `${this.name} stays at ${this.address}`;
    }
    get empId():number{
        return this.id;
    }
    set empId(id:number){
        this.id=id;
    }

}
let john=new Employee(1,"John",{street: "1st Main", city: "Bangalore", state: "Karnataka", pin: "560001"});
john.empId=10;
console.log(john.empId);

class Manager extends Employee{
    constructor(id: number, name: string, address: Address, public department: string){
        super(id,name,address);
    }
    getNameWithAddress():string{
        return `${this.name} is a manager at ${this.address}`;    
    }
}
console.log(john.getNameWithAddress());
let mike=new Manager(2,"Mike",{street: "1st main",city:"Mangalore",state:"Karnataka",pin:"534234"},"Sales");
console.log(mike.getNameWithAddress());


class Employee{
    id: number;
    name: string;
    address: string;
    constructor(id: number, name: string, address: string){
        this.id=id;
        this.name=name;
        this.address=address;
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
let john=new Employee(1,"John","New York");
john.empId=10;
console.log(john.empId);

class Manager extends Employee{
    constructor(id: number, name: string, address: string, public department: string){
        super(id,name,address);
    }
    getNameWithAddress():string{
        return `${this.name} is a manager at ${this.address}`;    
    }
}
console.log(john.getNameWithAddress());
let mike=new Manager(2,"Mike","London","Sales");
console.log(mike.getNameWithAddress());


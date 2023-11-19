export interface User{
    name: string;
    age: number;
    id: number;
    email: string;
}
// interface is used to define the structure of an object
let {name:userName,email:userLogin}:User={name:"John",id:1,age:40,email:"dasda"}

interface Employee extends User{
    department: string;
    salary: number;
}

export interface Login{
    Login():User;
}

let [user1,user2, ...restUsers]:User[]=[{name:"John",id:1,age:40,email:"dasda"},{name:"Mike",id:2,age:40,email:"dasda"},
{name:"Mary",id:3,age:40,email:"dasda"},
{name:"Steve",id:4,age:40,email:"dasda"},
]

console.log(restUsers)
let result=restUsers.filter(user=>user.id>2);
console.log(result);
//interfaces is not used in javascript

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// interface is used to define the structure of an object
let { name: userName, email: userLogin } = { name: "John", id: 1, age: 40, email: "dasda" };
let [user1, user2, ...restUsers] = [{ name: "John", id: 1, age: 40, email: "dasda" }, { name: "Mike", id: 2, age: 40, email: "dasda" },
    { name: "Mary", id: 3, age: 40, email: "dasda" },
    { name: "Steve", id: 4, age: 40, email: "dasda" },
];
console.log(restUsers);
let result = restUsers.filter(user => user.id > 2);
console.log(result);

"use strict";
//string
let lname;
lname = "Harshed";
let newname = lname.toUpperCase();
console.log(newname);
//number
let age;
age = 25;
age = 25.5;
let dob = "25";
let result = parseInt(dob);
//boolean
let isValid;
isValid = true;
console.log(isValid);
//array
let empList;
let depList;
empList = ["john", "smith"];
let numList;
numList = [10, 20, 30];
let results = numList.filter((n) => n > 10); //returns an array of elements that match the condition
console.log(results);
let num = numList.find((n) => n === 10); //returns the first element that matches the condition
console.log(num);
let sum = numList.reduce((a, b) => a + b); //returns the sum of all elements
console.log(sum);
;
let c = 2 /* blue */;
//tuples
let swapNums;
function swapNumbers(num1, num2) {
    return [num2, num1];
}
swapNums = swapNumbers(10, 20);
swapNums[0];
swapNums[1];
//any
let data; //can hold any type of data
data = 10;
data = "john";
data = true;
data = [10, 20, 30];
console.log(data);

"use strict";
function add(a, b) {
    return a + b;
}
console.log(add(10, 20));
const sub = (a, b) => a - b; // arrow function
console.log(sub(20, 10));
const mult = function (a, b) {
    return a * b;
};
console.log(mult(10, 20));
//optional parameter
function add1(a, b, c) {
    return c ? a + b + c : a + b;
}
console.log(add1(10, 20, 30));
//default parameter
function sub1(a, b, c = 10) {
    return a - b - c;
}
console.log(sub1(20, 10));
//rest parameter
function add2(a, ...b) {
    let sum = a;
    for (let i = 0; i < b.length; i++) {
        sum += b[i];
    }
    return sum;
}
console.log(add2(10, 20, 30, 40, 50));
//generic functions : type of the parameter is decided by the caller
function getItems(items) {
    return new Array().concat(items);
}
let concatResult = getItems([10, 20, 30]);

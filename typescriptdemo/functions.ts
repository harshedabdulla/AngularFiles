function add(a: number, b: number):number { // named function
    return a + b;
}
console.log(add(10, 20));

const sub=(a: number, b: number):number=>a-b; // arrow function
console.log(sub(20,10));

const mult=function(a: number, b: number):number{ // anonymous function
    return a*b;
}
console.log(mult(10,20));


//optional parameter
function add1(a: number, b: number, c?: number):number { // named function
    return c?a+b+c : a+b;
}
console.log(add1(10,20,30));

//default parameter
function sub1(a:number,b:number,c:number=10):number{
    return a-b-c;
}
console.log(sub1(20,10));

//rest parameter
function add2(a:number,...b:number[]):number{
    let sum=a;
    for(let i=0;i<b.length;i++){
        sum+=b[i];
    }
    return sum;
}
console.log(add2(10,20,30,40,50));

//generic functions : type of the parameter is decided by the caller
function getItems<Type>(items:Type[]):Type[]{
    return new Array<Type>().concat(items);
}
let concatResult=getItems<number>([10,20,30]);

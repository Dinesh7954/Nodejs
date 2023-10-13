const calculator = require("./calculator");

let age =20;
console.log(global.age);       // here also undefined 

calculator.addition(4,6);
calculator.subtraction(10,6);
calculator.division(12,6);
calculator.multiplication(8,3);
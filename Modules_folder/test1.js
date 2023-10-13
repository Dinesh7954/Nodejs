console.log("hello world from Nodejs");

function sayHello(){
    console.log("hello from dinesh");
}
sayHello();                             // hello from dinesh

//console.log(window);                 // gives error  window is not defined

console.log(global);                   // we will get so many things global object 


let age = 12;
console.log(global.age);             // undefined because age will not be addede to global object 

//age = 12 is value for this file only and each file is module and node works on principle on modularity so if want to use this in other file we need to import this module 
const os = require("os");

console.log(os.arch());                         // architecture  (64 or 32  )

console.log(os.platform());                     // win32

console.log(os.networkInterfaces());
console.log(os.cpus());                        //'Intel(R) Core(TM) i5-6200U CPU @ 2.30GHz'
console.log(os.totalmem());                   // total memory 
console.log(os.freemem());

// these configuration details are required in game developement process 
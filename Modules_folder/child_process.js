const childprocess = require("child_process");

childprocess.execSync("calc");                            // it will open calculator 
childprocess.execSync("start chrome");                    // it will open chrome browser

console.log("output "+childprocess.execSync("node demo.js"));  //it can be used to run any other file also 
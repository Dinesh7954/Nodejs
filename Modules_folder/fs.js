const fs = require("fs");

// reading a file 
let filecontent = fs.readFileSync("f1.txt");
console.log("data of file is " + filecontent);     //data of file is this is f1 file 


//writing in a file --> if the file is not present , it will create a file and then write the data
fs.writeFileSync("f2.txt", "file 2 is updated ")      // this will overrite file content 
console.log("file has been written");                


//append a file 
fs.appendFileSync("f3.txt","file data has been appended") //it will append data with prevoius data in file 
console.log("file appended");


// delete a file 
//fs.unlinkSync("f4.txt");                               // it will delete file f4.txt
console.log("file f4 has been deleted ");


// Directory

// make a directory 
//fs.mkdirSync("mydirectory")                   // create mydirectory


//check the content inside the directory

let folderpath = "E:\\web_development\\Scaler\\Node_modules\\mydirectory"

let foldercontent = fs.readdirSync(folderpath)
console.log("Folder content" , foldercontent);              //Folder content [ 'f9.txt' ]

//check whether a directory exist or not  or file exist or not 
let doesExist = fs.existsSync("mydirectory") 
console.log(doesExist);                                       // true 


// remove directory 
fs.rmdirSync("anydirectory");
console.log("directory has been removed");
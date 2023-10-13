const path = require("path")

let ext = path.extname("./f1.txt");
console.log(ext);                                //.txt

let baseName = path.basename("E:\\web_development\\Scaler\\Node_modules\\f1.txt");    //f1.txt
console.log(baseName);


console.log(__filename);       //current filename  E:\web_development\Scaler\Node_modules\path.js

console.log(__dirname);       //current directoryname  E:\web_development\Scaler\Node_modules
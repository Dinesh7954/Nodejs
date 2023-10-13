const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1/testDatabse")
.then(() => console.log("connection done"))
    
.catch(err =>  console.err("could not connect to mongodb",err))
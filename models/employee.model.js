const mongoose = require("mongoose")

const EmployeeSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 50
    },
    position: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 50
    },
    location: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 50
    },
    salary: {
        type: String,
        required: true,
   }
},{ timestamps: true})


const Employee = mongoose.model("Employee",EmployeeSchema)
module.exports = { Employee }


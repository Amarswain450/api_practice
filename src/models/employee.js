const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    address:{
        type: String,
        required: true
    }
});

const EmployeeModel = new mongoose.model('Employee',employeeSchema);

module.exports=EmployeeModel;
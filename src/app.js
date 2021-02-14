const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

require('./db/conn');
const Employee = require('./models/employee');

app.use(express.json());

// //create document
// app.post('/employees', (req,res) => {
//     const user = new Employee(req.body);
//     // console.log(user);
//     user.save().then(() => {
//         res.status(201).send(user);
//     }).catch((e) => {
//         res.status(400).send(e);
//     });
//     // res.send("amar");
// });


// create document
app.post('/employees', async(req,res) => {
    try{
        const employeeData = new Employee(req.body);
        const result = await employeeData.save();
        res.status(201).send(result);
    }catch(e){
        res.status(500).send(e);
    }
});

//read document
app.get('/employees', async(req,res) => {
    try{
        const result = await Employee.find();
        res.status(201).send(result);
    }catch(e){
        res.status(500).send(e);
    }
});

//read particular document
app.get('/employees/:id', async(req,res) => {
    try{
        const _id = req.params.id;
        const result = await Employee.find({_id});
        res.status(201).send(result);
    }catch(e){
        res.status(500).send(e);
    }
});

//update document
app.patch('/employees/:id', async(req,res) => {
    try{
        const _id = req.params.id;
        const updateDate = await Employee.findByIdAndUpdate(_id,req.body,{new:true});
        res.status(201).send(updateDate);
    }catch(e){
        res.status(500).send(e);
    }
});

//delete document
app.delete('/employees/:id', async(req,res) => {
    try{
        const _id = req.params.id;
        const deleteData = await Employee.findByIdAndDelete(_id);
        if(!_id){
            return res.status(400).send();
        }else{
            return res.status(201).send(deleteData);
        }
    }catch(e){
        res.status(500).send(e);
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port number ${PORT}`);
});
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/employeeData', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => {
    console.log("database connection...!!!");
}).catch(() => {
    console.log("no connection...!!!");
});


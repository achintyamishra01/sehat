const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const connectDB = require('./db/mongoose');

connectDB();

app.get('/',(req,res)=>{
    res.send("hello");
});

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// app.use('/',require('./routes/graph'));
app.use('/api/',require('./routes/user'));











app.listen(4000,()=>{
    console.log("listening at port 4000");
})

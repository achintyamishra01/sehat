const mongoose = require('mongoose');

const GraphSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    dataset:[
        {
            blood:{
                type:Number
            },
            date:{
                type:String 
            }
        }
    ]
});

module.exports = mongoose.model("user",GraphSchema);
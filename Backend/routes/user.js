const express = require('express');
const router = express.Router();
const user = require('../userschema');
const bcrypt = require('bcrypt');

var email = "";

router.post('/signin',async(req,res)=>{
    const checkEmail = req.body.email;
    email=checkEmail;
    const person = await user.findOne({email:checkEmail});

    if(person){
        const checkPassword = await bcrypt.compare(req.body.password,person.password);
        if(checkPassword){
            res.status(200).json({success:"Successfully Logged In"});
        }
        else{
            res.status(400).json({error:"Invalid password"});
        }
    }
    
    else{
        res.status(200).json({error:"User does not exist"});
    }

});

router.post('/addGraph',(req,res)=>{
    var blood = req.body.blood;
    var date = req.body.date;
    var emailFinding = email;
    user.findOne({email:`${emailFinding}`},async(err,item)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log(item);
            item.dataset.push({"blood":blood,"date":date});
            await item.save();
            res.send(email);

        }
    })
});

router.get('/fetchGraph',async(req,res)=>{
    var emailFinding1 = email;
    const graph = await user.findOne({email:`${emailFinding1}`});
    res.send(graph.dataset);
});


router.post('/register',async (req,res)=>{
    var check = req.body.email;
    var aadmi = await user.findOne({email:check});
    if(!aadmi){
        const hash = await bcrypt.hash(req.body.password,10);
        const person = await user.create({
            "name":req.body.name,
            "email":req.body.email,
            "password":hash,
        });
        // res.send(aadmi);
        // await person.save(); 
        return res.status(200).json("done");
    }
    else{
        return res.status(400).json({error:"username already exist"});
        // res.send(aadmi);
    }
});

module.exports = router;
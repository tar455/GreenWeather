const mongoose=require('mongoose');
const express=require('express');

const router=express.Router();
const UserDatamodel=mongoose.model('UserData');
router.get('/Login',(req, res)=>{
    UserDatamodel.find((err,docs)=>{
        // var user=new UserDatamodel();
        // user.first_name="traiq";
        // user.email="test@gmail.com";
        // user.password="password";
        // user.con_password="password";
        // user.save();
        if(!err){
            console.log(docs);
            res.send('hii');
        }
        else{
            res.send('error');
        }
    })
});
module.exports=router;

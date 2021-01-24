const mongoose=require('mongoose');
const express=require('express');
var bodyParser=require('body-parser');
const validator=require('validator');
const router=express.Router();
const UserDatamodel=mongoose.model('UserData');

router.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
router.use(bodyParser.json())

router.get('/signup',(req,res)=>{
    res.render('sign_up.ejs');
})

router.get('/Login',(req, res)=>{
    res.render('Login-page.ejs');
});
router.post('/Login',(req, res)=>{
    data=new UserDatamodel();
    UserDatamodel.find({},function(err,result){
        if(!err){
            var count=result.length;
            var flag=0;
            for(var i=0;i<count;i++){   //for making array
                if(result[i].email==req.body.UserName &&  result[i].password==req.body.Password)
                {
                    flag=1;
                    break;
                }
            }
            if(flag)
            {
                res.redirect('/Login-Page/start');
                console.log("Login Successfully");
            }
            else
            {
                res.redirect('/Login-Page/Login');
                console.log("Enter correct Email and password");
            }
            
        }
        else
        {
            console.log("Error",err);
        }

    })
})
router.post('/signup',(req,res)=>{
    data=new UserDatamodel();
    data.first_name=req.body.UserName;
    data.email=req.body.Email_id;
    if(req.body.Email_id==""){
        console.log("Please Enter Email Id");
    }
    data.password=req.body.Password;
    data.con_password=req.body.confirm_pass;
    if(data.save()){
    console.log("save successfully");
    res.redirect('/Login-Page/Login');
    }
    else{
        console.log("Failed to sign Up");
    }
    
});
router.get('/start',(req,res)=>{
    res.render('index.ejs');
})
module.exports=router;


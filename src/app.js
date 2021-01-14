const connection=require("../model/connection");
const express=require('express');
const path= require('path');
const app=express();
const mongoose=require('mongoose');
const ejs=require('ejs');
const UserDatareq= require('../controller/Login')
// var db=mongoose.connection=()=>{
//     console.log("DAta base server connected");
// };
const port=process.env.PORT ||3000;


const staptah=path.join(__dirname,'../templates/views');
// app.use('/public',express.static(staptah));
app.use('/images',express.static(path.join(__dirname,'../images')));
app.use('/partials',express.static(path.join(__dirname,'../templates/partials')));
app.use(express.static(path.join(__dirname,'../public')));
// app.use(express.static(path.join(__dirname,'../public/js')))

app.set('view engine','ejs');
app.set('views',staptah);
//app.set('views',staptah);
// Set HTML engine**


//app.engine('html', require('ejs').renderFile);
app.get('/',(req,res)=>{
    res.render('index.ejs',{list:"lists"})
});

app.get('/about',(req,res)=>{
    res.render('about.ejs',{list:"lists"})
})
app.get('/weather',(req,res)=>{
    res.render('weather.ejs',{list:"lists"})
})
app.get('/prediction',(req,res)=>{
    res.render('prediction.ejs');
});
app.get('/Login',(req,res)=>{
    res.render('Login-page.ejs');
})
app.listen(port,()=>{
    console.log(`Server running ${port}`);
});

app.use('/Login-Page',UserDatareq);

app.get('*',(req,res)=>{
     res.render('404Error.ejs');
})


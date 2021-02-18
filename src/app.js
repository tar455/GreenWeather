const connection=require("../model/connection");
const express=require('express');
const path= require('path');

const app=express();

const ejs=require('ejs');
const UserDatareq= require('../controller/Login')
const port= process.env.PORT || 4090;

const staptah=path.join(__dirname,'../templates/views');
app.use('/images',express.static(path.join(__dirname,'../images')));
app.use('/partials',express.static(path.join(__dirname,'../templates/partials')));
app.use(express.static(path.join(__dirname,'../public')));

app.set('view engine','ejs');
app.set('views',staptah);
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

app.listen(port,()=>{
    console.log(`Server running ${port}`);
});

app.use('/Login-Page',UserDatareq);

app.get('*',(req,res)=>{
     res.render('404Error.ejs');
})


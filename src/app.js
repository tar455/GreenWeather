const express=require('express');
const path= require('path');
const app=express();
const ejs=require('ejs');
const port=process.env.PORT ||3000;


const staptah=path.join(__dirname,'../views');

app.use('/public',express.static(staptah));
app.use('/images',express.static(path.join(__dirname,'../images')));
app.set('view engine','ejs');
//app.set('views',staptah);
// Set HTML engine**


app.engine('html', require('ejs').renderFile);
app.get('/',(req,res)=>{
    res.render('index.html')
});

app.get('/about',(req,res)=>{
    res.render('about.html')
})
app.get('/weather',(req,res)=>{
    res.render('weather.html')
})
app.get('*',(req,res)=>{
    res.send("404 not found");
})

app.listen(port,()=>{
    console.log(`Server running ${port}`);
});
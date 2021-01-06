const mongoose=require('mongoose');
const { error } = require('console');
var mongoDB = 'mongodb://127.0.0.1/admin';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true},(error)=>{
    if(!error){
        console.log("server connected");
    }
    else{
        console.log("Error to connect:",error);
    }
})
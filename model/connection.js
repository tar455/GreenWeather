// const MongoClient = require('mongodb').MongoClient;
const mongoose=require('mongoose');
// const { error } = require('console');
var mongoDB = "mongodb+srv://Tar:vaxJtFmiCTlgna9F@cluster0.dbnf5.mongodb.net/GreenWeather?retryWrites=true&w=majority";
// database = mongoClient.getDatabase("anotherDatabase");
// const client=new MongoClient();
// var mongoDB="mongodb://localhost:27017/GreenWeather";


mongoose.connect(process.env.MONGODB_URL || mongoDB, {useNewUrlParser: true, useUnifiedTopology: true},err => {
    
    if(!err) {
        console.log("connected successfully");
    }
    else{
        console.log("Error",err);
    }
  });

const UserData= require('./UserData');

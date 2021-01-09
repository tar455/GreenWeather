// var SignUpUsers=mongoose.Schema;

// var SomeModel=new SignUpUsers({
    
// })

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserData = new Schema(
  {
    first_name: {type: String, required: true, maxlength: 100},
    email: {type: String, required: true, maxlength: 100},
    password: {type: String},
    con_password: {type: String},
  }
);

mongoose.model('UserData',UserData);

// Virtual for author's full name
// UserData
// .virtual('first_name')
// .get(function () {
//   return this.first_name;
// });

// // Virtual for author's lifespan
// UserData
// .virtual('email')
// .get(function () {
//   return this.email;
// });

// // Virtual for author's URL
// UserData
// .virtual('url')
// .get(function () {
//   return '/catalog/author/' + this._id;
// });

// //Export model
// module.exports = mongoose.model('UserData', UserData);

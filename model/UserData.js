var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserData = new Schema(
  {
    first_name: {type: String },
    email: {type: String },
    password: {type: String},
    con_password: {type: String},
  },
  {
    collection:"UserData"
  }
);

mongoose.model('UserData',UserData);


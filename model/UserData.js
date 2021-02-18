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


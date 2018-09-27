var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var signupSchema = new Schema({
  fristname: String,
  Lastname: String,
  address: String,
  email:  String,
  password: String

})

var Signup = mongoose.model('Signup', signupSchema);


module.exports = Signup;
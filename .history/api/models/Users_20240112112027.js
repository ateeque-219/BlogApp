const mongoose = require('mongoose');
const {Schema} = mongoose;
const UserSchema = new Schema({
    username :{type:String , require:true ,min:4,unique:true  },
    password:{type:String , required:true},
});
const UserModel = model('User', UserSchema);
module.exports = UserModel;
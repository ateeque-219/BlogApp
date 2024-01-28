const mongoose = require('mongoose');
const {Schema,model} = mongoose;
const UserSchema = new Schema({
    username : {type:String , require:true ,min:4,unique:true  },
    password: {type:String , required:true},
});
const UsersModel = model('Users', UserSchema);
module.exports = UsersModel;



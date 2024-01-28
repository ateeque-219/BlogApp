const mongoose = require('mongoose');
const {Schema,model} = mongoose;
const UserSchema = new Schema({
    username : {type:String   },
    password: {type:String , required:true},
});
const UserModel = model('User', UserSchema);
module.exports = UserModel;
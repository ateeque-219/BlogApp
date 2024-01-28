const mongoose = require('mongoose');
const {Schema} = mongose;
const UserSchema = new Schema({
    username :{type:String , require:true ,min:4,  }
})
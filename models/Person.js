const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PersonSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    gender:{
        type:String,
        required:true,
    },

    email:{
        type:String,
        required:true,
    },

    password:{
        type:String,
        required:true,
    },

    username:{
        type:String,
    },

    profilepic:{
        type:String,
        default:'',
    },

    dob:{
        type:Date,
        default:Date.now(),
    }
})

Person = mongoose.model("users", PersonSchema);

module.exports = Person;
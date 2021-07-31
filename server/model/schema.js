const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        unique:true,
        required:true
    },
    email:{
        type:String,
        required: true,
        minlength: 8
    },
    password:{
        type:String
    }
})

module.exports = User = mongoose.model('user', userSchema)
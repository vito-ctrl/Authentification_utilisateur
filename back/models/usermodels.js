const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    email:{
        type: String,
        unique: true,
        require: true
    },
    role:{
        type: String,
        default: 'user'
    },
    password:{
        type: String,
        require: true
    }
})

const User = mongoose.model('login', loginSchema);
module.exports = User;
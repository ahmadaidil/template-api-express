'use strict'

var mongoose = require('mongoose')

var userSchema = mongoose.Schema({
    name: String,
    username: String,
    email: String,
    password: String,
    secretKey: String
})

var User = mongoose.model('user', userSchema);


module.exports = User;

'use strict'

var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/to-do');

var userSchema = mongoose.Schema({
    username: String,
    fullname: String,
    email: String,
    password: String,
    salt: String
})

var userModel = mongoose.model('user', userSchema);


module.exports = {
    userModel
}
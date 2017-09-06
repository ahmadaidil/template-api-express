'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

let userSchema = Schema({
    fullname: {type: String, required: true},
    username: {type: String, unique: true, required: true},
    email: {type: String, unique:true, required:true},
    password: {type: String, required:true},
    secretKey: String
})

let User = mongoose.model('user', userSchema);


module.exports = User;

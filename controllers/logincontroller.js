const users = require('../models/user');
const random = require('../helpers/hash')
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config()

exports.signup = (req, res) => {
    let secret = random.randomStr(8);
    users.userModel.create({
        username: req.body.username,
        password: random.hashish(req.body.password, secret),
        email: req.body.email,
        fullname: req.body.name,
        salt: secret
    })
        .then(data => {
            res.send(data)
        })
}

exports.signin = (req, res) => {
    users.userModel.findOne({
        username: req.body.username
    })
        .then(data => {
            pass = random.hashish(req.body.password, data.salt)
            if (pass == data.password) {
                jwt.sign({
                    username: data.username,
                    fullname: data.fullname,
                    email: data.email
                }, process.env.SECRET, (err, token) => {
                    if (err) console.log(err)
                    res.send(token)
                });
            } else {
                res.send('wrong password')
            }
        })
        .catch(err => res.send('nousername'))
}
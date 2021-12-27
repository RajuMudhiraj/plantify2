const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/User')

const signUp = (req, res) => {

    if (req.session.otp && req.session.otp === req.session.newOtp) {

        bcrypt.hash(req.body.password, 10, function (err, hash) {
            if (err) {
                res.status(500).json({ Error: err + " Something went wrong while hashing password" })
            }
            if (hash) {
                const user = {
                    email: req.session.email,
                    password: hash,
                    name: req.body.name,
                    gender: req.body.gender,
                    dob: req.body.dob
                }
                User.create(user)
                    .then(result => {

                        // changing the req.session.otp to a new value
                        req.session.otp = "ga44$@&*1654"
                        
                        res.status(201).json("User created successfully!")
                    })
                    .catch(err => {
                        res.status(500).json({ Error: err + " Something went wrong while creating user." })
                    })
            }

        });
    }
    else {
        res.status(401).json({ message: "Please verify email" })
    }


}

module.exports = signUp;
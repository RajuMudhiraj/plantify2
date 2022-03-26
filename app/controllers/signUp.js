const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/User')

exports.signUp = (req, res) => {
    const { password, name, gender, dob } = req.body;

    if (req.session.otp && req.session.otp === req.session.newOtp) {

        bcrypt.hash(password, 10, function (err, hash) {
            if (err) {
                res.status(500).json({ Error: err + " Something went wrong while hashing password" })
            }
            if (hash) {
                const user = {
                    email: req.session.email,
                    password: hash,
                    name: name,
                    gender: gender,
                    dob: dob
                }
                User.create(user)
                    .then(result => {

                        // changing the req.session.otp to a new value
                        req.session.otp = "ga44$@&*1654"

                        res.status(201).json({
                            success: true,
                            message: "User created successfully!"
                        })
                    })
                    .catch(err => {
                        res.status(400).json({
                            success: false,
                            message: err + " "
                        })
                    })
            }

        });
    }
    else {
        res.status(400).json({
            success: false,
            message: "Please verify the email"
        })
    }


}


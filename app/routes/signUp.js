const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Sequelize, Op } = require('sequelize');
const { User } = require('../models/Associations');

// Handling POST request to /signUp
router.post('/', (req, res) => {
    console.log(req.session.email, req.session.otp, req.session.newOtp)

    if (req.session.otp === req.session.newOtp) {


        // req.session.otp = "535e1f";
        // req.session.newOtp = "d4f6ef";


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


})


module.exports = router;
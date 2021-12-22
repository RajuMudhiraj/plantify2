const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { Sequelize, Op } = require('sequelize')
const User = require('../models/User')

// Handling POST request to /signUp
router.post('/', (req, res) => {
    User.findOne({ where: { email: req.body.email } })
        .then(result => {
            if (result) {
                res.status(200).json({ message: "User already exists." })
            }
            else {
                bcrypt.hash(req.body.password, 10, function (err, hash) {
                    if (err) {
                        res.status(500).json({ Error: err + " Something went wrong while hashing password" })
                    }
                    if (hash) {
                        const user = {
                            email: req.body.email,
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
        })
        .catch(err => {
            res.status(500).json({ Error: err + " Something went wrong while finding user." })
        })
})

module.exports = router;
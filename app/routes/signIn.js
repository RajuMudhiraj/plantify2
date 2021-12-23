const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { Sequelize, Op } = require('sequelize')
const {User} = require('../models/Associations')

// Signing in 
router.post('/', (req, res) => {
    User.findOne({ where: { email: req.body.email } })
        .then(result => {
            if (result) {
                bcrypt.compare(req.body.password, result.dataValues.password)
                    .then(function (response) {
                        if (response) {
                            const token = jwt.sign({
                                userId: result.dataValues.id,
                                isAdmin: result.dataValues.isAdmin,
                                name: result.dataValues.name
                            },
                                process.env.SECRET,
                                {
                                    expiresIn: "1d"

                                })
                            res.status(200).json({
                                message: "Auth successful",
                                token: token

                            })
                        }
                        else {
                            // console.log(response)
                            res.status(401).json({
                                Message: "Auth failed."
                            })

                        }
                    })
            }
            else {
                res.status(200).json({
                    message: "User not registered"
                })
            }
        })
        .catch(err => {
            res.status(500).json({ Error: err + " Something went wrong while finding user." })
        })
})

module.exports = router;
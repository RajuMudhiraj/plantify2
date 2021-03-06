const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/User')

exports.signIn = (req, res) => {
    User.findOne({ where: { email: req.body.email } })
        .then(result => {
            console.log(result)
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
                            // req.session.userId = result.dataValues.id,
                            //     req.session.name = result.dataValues.name,
                            //     req.session.isAdmin = result.dataValues.isAdmin,


                            res.status(200).json({
                                success: true,
                                token: `Bearer ${token}`

                            })
                        }
                        else {
                            // console.log(response)
                            res.status(400).json({
                                success: false,
                                Message: "Auth failed."
                            })

                        }
                    })
                    .catch(err => {
                        res.status(400).json({
                            success: false,
                            message: err + " "
                        })
                    })
            }
            else {
                res.status(404).json({
                    message: "User not registered"
                })
            }
        })
        .catch(err => {
            res.status(500).json({ Error: err + " Something went wrong while finding user." })
        })
}


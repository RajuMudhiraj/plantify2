const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/User')

const signIn = (req, res) => {
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
}

module.exports = signIn;
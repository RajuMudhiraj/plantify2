const express = require('express');
const router = express.Router();
const { Auth } = require('two-step-auth');

const { User } = require('../models/Associations')

router.post('/', (req, res) => {
    User.findOne({ where: { email: req.body.email } })
        .then(async result => {
            if (result) {
                res.status(200).json({ message: "User already exists." })
            }
            else {
                try {
                    req.session.email = req.body.email;
                    const result = await Auth(req.body.email, "Test company");
                    req.session.otp = result.OTP
                    res.status(200).json({ message: "OTP sent successfully!" })
                }
                catch (err) {
                    res.status(404).json({ message: err })
                }
            }
        })
        .catch(err => {
            res.status(500).json({ Error: err + " Something went wrong while finding user." })
        })

})

module.exports = router;
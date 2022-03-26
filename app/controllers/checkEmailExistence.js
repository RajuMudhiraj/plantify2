const User = require('../models/User')
const { Auth } = require('two-step-auth')

exports.checkEmailExistence = (req, res) => {

    const { email } = req.query;

    if (email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {

        User.findOne({ where: { email: email } })
            .then(async result => {
                if (result) {
                    res.status(200).json({
                        success: true,
                        message: "User already exists."
                    })
                }
                else {
                    try {
                        req.session.email = email;
                        const result = await Auth(email, "Test company");
                        req.session.otp = result.OTP
                        console.log(result.OTP)
                        res.status(201).json({
                            success: true,
                            message: `OTP successfully sent to ${email} !`
                        })
                    }
                    catch (err) {
                        res.status(404).json({ message: err + "" })
                    }
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
        res.status(400).json({
            success: false,
            message: "Invalid email id"
        })
    }
}


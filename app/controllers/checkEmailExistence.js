const User = require('../models/User')
const { Auth } = require('two-step-auth')

const checkEmail = (req, res) => {

    const email = req.body.email;

    if (email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {

        User.findOne({ where: { email: req.body.email } })
            .then(async result => {
                if (result) {
                    res.status(200).json({ message: "User already exists." })
                }
                else {
                    console.log('test')
                    try {
                        req.session.email = req.body.email;
                        const result = await Auth(req.body.email, "Test company");
                        req.session.otp = result.OTP
                        console.log(result.OTP)
                        console.log(req.session.email)
                        res.status(200).json({ message: "OTP sent successfully!" })
                    }
                    catch (err) {
                        res.status(404).json({ message: err + "" })
                    }
                }
            })
            .catch(err => {
                res.status(500).json({ Error: err + " Something went wrong while finding user." })
            })
    }
    else {
        res.status(401).json({ message: "Invalid email id" })
    }
}

module.exports = checkEmail;
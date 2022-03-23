const { User } = require('../models/Associations')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.verifyEmailOtp = async (req, res) => {

    if (req.session.otp == req.body.otp) {
        req.session.newOtp = Number(req.body.otp);
        res.status(200).json({
            message: "OTP verified successfully!",
            status: "Success"
        });
    }
    else {
        res.status(200).json({
            message: "OTP doesn't match",
            status: "Failed"
        });
    }
}


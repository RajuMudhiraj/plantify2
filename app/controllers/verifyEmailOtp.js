const { User } = require('../models/Associations')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.verifyEmailOtp = async (req, res) => {

    if (req.session.otp == req.body.otp) {
        req.session.newOtp = Number(req.body.otp);
        res.status(200).json({
            success: "true",
            message: "OTP verified successfully!"
        });
    }
    else {
        res.status(400).json({
            success: "false",
            message: "OTP doesn't match"
        });
    }
}


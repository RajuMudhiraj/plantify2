const express = require('express');
const router = express.Router();
const { Auth } = require('two-step-auth');

router.post('/', async (req, res) => {

    console.log(req.session.email)
    console.log(req.session.otp)


    if (req.session.otp == req.body.otp) {
        req.session.newOtp = Number(req.body.otp);
        res.status(200).json({
            message: "OTP verified successfully!",
            status: "OK"
        });
    }
    else {
        res.status(200).json({
            message: "OTP doesn't match",
            status: "Failed"
        });
    }
})

module.exports = router;

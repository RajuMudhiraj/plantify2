const express = require('express');
const router = express.Router();

const { verifyEmailOtp } = require('../controllers/verifyEmailOtp')


/**
 * @swagger
 * /verifyEmailOtp:
 *   post:
 *     summary: Find the otp in inbox
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             otp: 123456
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: Status of email existence
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: otp verified successfully!.
 *       400:
 *         description: Returns error message
 *         content:
 *           application/json:
 *             example:
 *               success: false
 *               message: Error message
 */

router.post('/', verifyEmailOtp)

module.exports = router;

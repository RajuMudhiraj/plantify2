const express = require('express');
const router = express.Router();

const { checkEmailExistence } = require('../controllers/checkEmailExistence')

/**
 * @swagger
 * /checkEmailExistence:
 *   post:
 *     summary: Check if the email already exists, if not get otp
 *     tags: [User]
 *     parameters:
 *       - in: query
 *         name: email
 *         schema:
 *           type: string
 *         required: true
 *         description: email
 *     responses:
 *       200:
 *         description: Status of email existence
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: User already exists.
 *       201:
 *         description: Status of otp
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: otp successfully sent to test@gmail.com.
 *       400:
 *         description: Returns error message
 *         content:
 *           application/json:
 *             example:
 *               success: false
 *               message: Error message
 */

router.post('/', checkEmailExistence)

module.exports = router;
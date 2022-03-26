const express = require('express');
const router = express.Router();

const { signUp } = require('../controllers/signUp')

// Swagger documentation for User Schema.
/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           description: The email Id
 *         password:
 *           type: string
 *           description: The password
 *         
 *       example:
 *         email: test@gmail.com
 *         password: password
 *                
 */

// User tag for grouping all User managing apis
/**
 * @swagger
 * tags:
 *   name: User
 *   description: The User managing apis
 */


/**
* @swagger
* /signUp:
*   post:
*     summary: Create new user
*     tags: [User]
*     requestBody:
*       required: true
*       content:
*         application/json:
*           example:
*             password: password
*             name: test user
*             dob: 01-01-1990
*             gender: male
*           schema:
*             $ref: '#/components/schemas/User'
*     responses:
*       200:
*         description: The response information of existing User.
*         content:
*           application/json:
*             example:
*               success: false
*               message: User already exists  
*       201:
*         description: The response user created.
*         content:
*           application/json:
*             example:
*               success: true
*               message: User created successfully.
*       400:
*         description: Error message.
*         content:
*           application/json:
*             example:
*               success: false
*               message: Error message
*/

// Handling POST request to /signUp
router.post('/', signUp)


module.exports = router;
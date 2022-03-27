const express = require('express');
const router = express.Router();

const { addNursery } = require('../controllers/addNursery')

// Swagger documentation for User Schema.
/**
 * @swagger
 * components:
 *   schemas:
 *     Nursery:
 *       type: object
 *       required:
 *         - lat
 *         - long
 *       properties:
 *         name:
 *           type: string
 *           description: Name of the place
 *         lat:
 *           type: float
 *           description: The latitude
 *         long:
 *           type: float
 *           description: The longitude
 *         address:
 *           type: string
 *           description: The adress of nursery
 *         photo:
 *           type: string
 *           description: The link of photo
 *         
 *       example:
 *         name: Test Nursery
 *         lat: 19.11111
 *         long: 78.11111
 *         address: Test address
 *         photo: https://en.gaonconnection.com/wp-content/uploads/2021/06/nursery-3.jpg
 *                
 */

// Nursery tag for grouping all Nursery managing apis
/**
 * @swagger
 * tags:
 *   name: Nursery
 *   description: The Nursery managing apis
 */

/**
* @swagger
* /addNursery:
*   post:
*     summary: Add a nursery
*     tags: [Nursery]
*     security:
*       - bearerAuth: []
*     requestBody:
*       required: true
*       content:
*         application/json:
*           example:
*             name: Nursery name
*             address: Nursery address
*             lat: 19.11111
*             long: 78.11111
*             photo: https://en.gaonconnection.com/wp-content/uploads/2021/06/nursery-3.jpg
*           schema:
*             $ref: '#/components/schemas/Nursery'
*     responses:
*       201:
*         description: The response of Nursery creation.
*         content:
*           application/json:
*             example:
*               success: true
*               message: Nursery created successfully! 
*       400:
*         description: The error message.
*         content:
*           application/json:
*             example:
*               success: false
*               message: Error message.
*/

// Handling POST request to /addNursery
router.post('/', addNursery)


module.exports = router;
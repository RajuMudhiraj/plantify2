const express = require('express');
const router = express.Router();

const { addPlace } = require('../controllers/addPlace')


// Swagger documentation for User Schema.
/**
 * @swagger
 * components:
 *   schemas:
 *     AddPlace:
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
 *         isSeedlingOrdered:
 *           type: boolean
 *           description: The status of seedling order
 *         isSeedlingDelivered:
 *           type: boolean
 *           description: The status of seedling delivery
 *         isPlanted:
 *           type: boolean
 *           description: The status of seedling planted
 *         idDonated:
 *           type: boolean
 *           description: The status of place donated
 * 
 *         
 *       example:
 *         name: Test place
 *         lat: 19.11111
 *         long: 78.11111
 *         isSeedlingOrdered: false
 *         isSeedlingDelivered: false
 *         isPlanted: false
 *         isDonated: false
 *                
 */

/**
 * @swagger
 * tags:
 *   name: AddPlace
 *   description: The place managing apis
 */

/**
* @swagger
* /addPlace:
*   post:
*     summary: Add a place
*     tags: [AddPlace]
*     security:
*       - bearerAuth: []
*     requestBody:
*       required: true
*       content:
*         application/json:
*           example:
*             name: Place name
*             lat: 19.11111
*             long: 78.11111
*           schema:
*             $ref: '#/components/schemas/AddPlace'
*     responses:
*       201:
*         description: The response of adding place.
*         content:
*           application/json:
*             example:
*               success: true
*               message: Place added successfully! 
*       400:
*         description: The error message.
*         content:
*           application/json:
*             example:
*               success: false
*               message: Error message.
*/



// Handling POST request to /flowBar
router.post('/', addPlace)


module.exports = router;
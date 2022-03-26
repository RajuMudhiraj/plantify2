const express = require('express');
const router = express.Router();

const { addNursery } = require('../controllers/addNursery')


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
*             $ref: '#/components/schemas/User'
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
const express = require('express');
const router = express.Router();
const Nursery = require('../models/Nursery')


// Handling GET request to /viewNurseries
router.get('/', (req, res) => {

    Nursery.findAll()
        // .save()
        .then(result => {
            res.status(201).json(result)
        })
        .catch(err => {
            res.status(500).json({ Error: err + " Something went wrong while finding Nurseries." })
        })
})


module.exports = router;
const express = require('express');
const router = express.Router();
const { Nursery } = require('../models/Associations')


// Handling POST request to /addNursery
router.post('/', (req, res) => {
    
    const { name, address, location, photo } = req.body;

    const inputData = {
        name: name,
        address: address,
        // location: location,
        photo: photo
    }
    Nursery.create(inputData)
        .then(result => {
            res.status(201).json(result)
        })
        .catch(err => {
            res.status(500).json({ Error: err + " Something went wrong while adding Nursery." })
        })
})


module.exports = router;
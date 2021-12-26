const express = require('express');
const router = express.Router();
const Nursery = require('../models/Nursery')


// Handling POST request to /addNursery
router.post('/', (req, res) => {
    console.log(req.body)

    const { name, address, location, photo } = req.body;

    const inputData = {
        name: name,
        address: address,
        // lat: lat,
        location: location,
        photo: photo
    }
    Nursery.create(inputData)
        // .save()
        .then(result => {
            res.status(201).json(result)
        })
        .catch(err => {
            res.status(500).json({ Error: err + " Something went wrong while adding Nursery." })
        })
})


module.exports = router;
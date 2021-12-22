const express = require('express');
const router = express.Router();

// Signing in 
router.get('/', (req, res) => {
    res.status(200).json({ message: "Sign in page" })
});

module.exports = router;
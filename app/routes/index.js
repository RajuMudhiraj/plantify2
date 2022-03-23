const express = require('express');
const router = express.Router();



// Importing middleware of verifyAdmin
const verifyAdmin = require('../middlewares/verifyAdmin')

// Importing middleware of verifyAuth
const verifyAuth = require('../middlewares/verifyAuth')

// home route
router.get("/", (req, res) => {
    res.status(200).json({ message: "Welcome to Plant1Tree" });

});

// Sign in route
router.use('/signIn', require('./signIn'))

//  check email existence and send otp
router.use('/checkEmailExistence', require('./checkEmailExistence'))

//  verify email otp
router.use('/verifyEmailOtp', require('./verifyEmailOtp'))

// Sign up route
router.use('/signUp', require('./signUp'))

//  add Nursery
router.use('/addNursery', verifyAuth, require('./addNursery'))

//  view Nurseries
router.use('/viewNurseries', verifyAuth, require('./viewNurseries'))

//  add Seedling
router.use('/addSeedling', verifyAuth, require('./addSeedling'))

//  view Seedlings
router.use('/viewSeedlings', verifyAuth, require('./viewSeedlings'))

//  view Users
router.use('/viewUsers', verifyAdmin, require('./viewUsers'))

//  flowBar
router.use('/viewPlaces', verifyAuth, require('./viewPlaces'))


//  Add Plants Place
router.use('/addPlace', verifyAuth, require('./addPlace'))

//  Order Seedling
router.use('/orderSeedling', verifyAuth, require('./orderSeedling'))

//  View Orders
router.use('/viewOrders', verifyAuth, require('./viewOrders'))

//  Mark Orders Delivered
router.use('/markOrdersDelivered', verifyAuth, require('./markOrdersDelivered'))

//  Plant Seedling
router.use('/plantSeedling', verifyAuth, require('./plantSeedling'))

//  View Plants
router.use('/viewPlants', verifyAuth, require('./viewPlants'))




module.exports = router;



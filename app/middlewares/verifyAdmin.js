const jwt = require('jsonwebtoken')

const verifyAdmin = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, process.env.SECRET);
        if (decoded.isAdmin) {
            req.userData = decoded

            next()
        }
        else {
            res.status(400).json({ message: "You are not an admin" })
        }
    }
    catch (err) {
        res.status(401).json({
            message: 'Auth failed.'
        })
    }
}
module.exports = verifyAdmin;
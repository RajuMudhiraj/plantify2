const jwt = require('jsonwebtoken')

const verifyAuth = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, process.env.SECRET);
        if (decoded) {
            req.userData = decoded
            // console.log(req.)
            next()
        }

    }
    catch (err) {
        res.status(401).json({
            message: 'Auth failed.'
        })
    }
}
module.exports = verifyAuth;
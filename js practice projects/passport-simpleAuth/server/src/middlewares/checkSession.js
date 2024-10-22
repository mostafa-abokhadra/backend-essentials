function checkSessoin (req, res, next) {
    if (!req.isAuthenticated())
        return res.status(401).json({"message": "unAuthorized"})
    next()
}
module.exports = checkSessoin
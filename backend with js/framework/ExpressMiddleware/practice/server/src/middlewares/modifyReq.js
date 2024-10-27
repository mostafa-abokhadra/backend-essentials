// this is gonna be an example of a middleware that modify the req object

async function modifyReq(req, res, next) {
    req.newField = "i have been set by modifyReq middleware"
    next()
}
module.exports = modifyReq
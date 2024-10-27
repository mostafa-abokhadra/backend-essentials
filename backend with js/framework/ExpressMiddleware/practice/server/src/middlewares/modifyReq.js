// this is gonna be an example of a middleware that modify the req object

async function modifyReq(req, res, next) {
    req.newField = "i have been set by modifyReq middleware"
    console.log(req.newField)
    next()
}
module.exports = modifyReq
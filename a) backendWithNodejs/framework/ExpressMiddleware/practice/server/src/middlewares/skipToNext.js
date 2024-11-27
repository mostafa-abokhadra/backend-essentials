async function skipTONextRoute(req, res, next) {
    req.skip = 1
    console.log(
        "i am going to skip to the next route that matches the current route skipping all current route middlewares"
    )
    next()
}
module.exports = skipTONextRoute
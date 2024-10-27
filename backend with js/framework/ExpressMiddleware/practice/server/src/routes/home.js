const router = require("express").Router()

const newVisitLogger = require("../middlewares/newVisit")
const endCylcle = require('../middlewares/endCycle')
const modifyReq = require("../middlewares/modifyReq")
const skipTONextRoute = require('../middlewares/skipToNext')

router.use(newVisitLogger, skipTONextRoute, /*endCylcle*/ modifyReq)

router.get('/', (req, res, next) => {
    if (req.skip === 1)
        return next('route')
    console.log("i'm now in home page")
    console.log("req.newField =", req.newField)
    return res.status(200).json({"message": "welcome to home page"})
})

router.get('/', (req, res) => {
    return res.send("from second home handler")
    // return res.status(200).json({"message": "comming from the 2nd home handler"})
})
module.exports = router
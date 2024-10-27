const router = require("express").Router()

const newVisitLogger = require("../middlewares/newVisit")
const endCylcle = require('../middlewares/endCycle')
const modifyReq = require("../middlewares/modifyReq")

router.use(newVisitLogger, /*endCylcle*/ modifyReq)

router.get('/', (req, res) => {
    console.log("i'm now in home page")
    console.log("req.newField =", req.newField)
    return res.status(200).json({"message": "welcome to home page"})
})

module.exports = router
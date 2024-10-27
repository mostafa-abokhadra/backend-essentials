const router = require("express").Router()

const newVisitLogger = require("../middlewares/newVisit")
const endCylcle = require('../middlewares/endCycle')

router.use(newVisitLogger, endCylcle)

router.get('/', (req, res) => {
    console.log("i'm now in home page")
    return res.status(200).json({"message": "welcome to home page"})
})

module.exports = router
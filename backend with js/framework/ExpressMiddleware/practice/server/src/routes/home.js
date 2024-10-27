const router = require("express").Router()
const newVisitLogger = require("../middlewares/newVisit")

router.use(newVisitLogger)
router.get('/', (req, res) => {
    console.log("i'm now in home page")
    return res.status(200).json({"message": "welcome to home page"})
})

module.exports = router
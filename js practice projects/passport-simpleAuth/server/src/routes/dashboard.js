const router = require("express").Router()
const checkSessoin = require('../middlewares/checkSession')
const dashboardController = require("../controllers/dashboardController")
router.get(
    "/dashboard",
    checkSessoin,
    dashboardController.getDashboard
)

module.exports = router
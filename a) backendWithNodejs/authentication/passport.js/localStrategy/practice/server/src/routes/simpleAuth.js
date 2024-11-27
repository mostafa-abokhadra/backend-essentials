const router = require('express').Router()
const simpleAuthController = require('../controllers/simpleAuthController')
const passport = require('../config/passport')

router.post(
    "/login",
    simpleAuthController.postLogin
)

router.post(
    '/logout',
    simpleAuthController.logout
)
module.exports = router
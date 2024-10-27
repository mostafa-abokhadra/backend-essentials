require('dotenv').config()
const express = require("express")

const passport = require("../server/config/googleAuth.js")

const session = require("../server/middlewares/session")

const homeRouter = require("../server/routes/home.js")
const googelAuth = require("../server/routes/gogoleAuth.js")

const server = express()

server.use(session)
server.use(passport.initialize());
server.use(passport.session());

server.use('/', homeRouter)
server.use('/', googelAuth)

server.listen(3000, () => {
    console.log("i'm listenting ... ")
})
const express = require('express')

const homeRoute = require('./src/routes/home')
const dashboardRoute = require('./src/routes/dashboard')

const simpleAuthRoute = require('./src/routes/simpleAuth')
const passport = require('./src/config/passport')
const session = require('./src/middlewares/session')


const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(session)
app.use(passport.initialize())
app.use(passport.session())


app.use('/', homeRoute)
app.use('/', simpleAuthRoute)
app.use('/', dashboardRoute)


app.listen(3000, () => {
    console.log("i'm listening....")
})
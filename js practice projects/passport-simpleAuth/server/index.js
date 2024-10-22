const express = require('express')
const homeRoute = require('./src/routes/home')
const app = express()

app.use('/', homeRoute)

app.listen(3000, () => {
    console.log("i'm listening....")
})
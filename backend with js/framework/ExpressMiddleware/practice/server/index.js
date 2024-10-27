const express = require("express")
const server = express()
const homeRoutes = require("./src/routes/home")

server.use(homeRoutes)

server.listen(3000, () => {
    console.log("i'm listening ...")
})
const express = require("express")
const http = require("http")
const {Server} = require("socket.io")

const app = require("express")
const server = http.createServer(app)
const io = new Server(server)

app.use(express.static("public"))
app.set("view engine", 'ejs')

try {
    io.on("connection", (socket) => {

        console.log("conncetion has been established with the client")
        console.log(`client id is ${socket.id}`)

        socket.on("message", (msg) => {
            console.log("message has been received")
            console.log(`the message is ${msg}`)
            io.emit("message", msg)
        })

        socket.on("disconnect", () => {
            console.log(`client with ${socket.id} id has been disconnected`)
        })

    })
} catch(err) {
    console.log("an error has occured", err)
}

server.listen(3000, () => {
    console.log("i'm listening")
})
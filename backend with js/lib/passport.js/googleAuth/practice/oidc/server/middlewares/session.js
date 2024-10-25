const session = require("express-session")

module.exports = session({
    secret: "my default secret",
    name: "sessionCookie",
    resave: false,
    saveUninitialized: false,
})
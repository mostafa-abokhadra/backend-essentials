// this is gonna be an example for middleware that execute code

let visitedTimes = require("../global/global").visitedTimes

async function newVisit(req, res, next) {
    console.log(`a new user has visited the website at ${Date()}`)
    visitedTimes += 1
    console.log(visitedTimes)
    next()
}

module.exports = newVisit
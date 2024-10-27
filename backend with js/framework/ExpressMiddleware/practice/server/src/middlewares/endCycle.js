// this is gonna be an example of a middleware that end the req-res cycle

async function endCycle (req, res) {
    return res.status(200).json({
        "message": "i just want to end the cycle because i can :) and when we can we do :)"
    })
}
module.exports = endCycle
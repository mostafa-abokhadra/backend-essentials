class homeController {

    static async getHome(req, res) {
        return res.status(200).json({"message": "from home page"})
    }
}
module.exports = homeController
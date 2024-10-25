class homeController {
    static async getHome(req, res) {
        return res.status(200).json({"message": "home page"})
    }
}
module.exports = homeController
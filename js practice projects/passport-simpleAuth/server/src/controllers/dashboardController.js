class dashboardController {

    static async getDashboard(req, res) {
        console.log(req.user)
        return res.status(200).json({"message": "dashboard"})
    }

}
module.exports = dashboardController
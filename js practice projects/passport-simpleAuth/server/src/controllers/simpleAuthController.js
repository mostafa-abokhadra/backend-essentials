const passport = require('../config/passport')

class simpleAuthController{

    static async postLogin(req, res, next) {

        passport.authenticate('local', (err, userId, info) => {
            if (err) {
                console.log(err)
                return res.status(500).json({"message": "server error"})
            }
            if (!userId)
                return res.status(401).json({ message: info.message });

            req.logIn(userId, (err) => {
                if (err) {
                    return res.status(500).json({ message: 'Error logging in' });
                }
                // session data is in req.session
                // the part of user that we used to serialize the user is in req.session.passport.user
                return res.status(200).json({ message: 'Login successful', userId: userId })
            });
        })(req, res, next)
    }
    
    static async logout(req, res) {
        req.logout((err) => {
            if (err)
                return res.status(500).json({"message": "logout failed"})
        })
        return res.status(200).json({"message": "logout successful"})
    }
}
module.exports = simpleAuthController
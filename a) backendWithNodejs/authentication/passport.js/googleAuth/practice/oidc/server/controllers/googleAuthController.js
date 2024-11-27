const passport = require("../config/googleAuth")
class googelAuthController {
    static async getGoogleLogin(req, res) {
        console.log("from get login", req.user)
        return res.status(200).json({"message": "googleAuthConsentPage"})
    }
    static async redirectGoogle(req, res, next) {
        passport.authenticate('google', (err, user, info) => {
            if (err) 
                return res.status(500).json({ error: 'Authentication failed. Please try again.' });
            if (!user) 
                return res.status(401).json({ error: 'User not found or authentication denied.' });
            req.logIn(user, (loginErr) => {
                if (loginErr)
                    return res.status(500).json({ error: 'Login failed. Please try again.' });
                res.status(200).json({ message: 'Authentication successful!', user });
            });
        })(req, res, next);
    }
    static async logout(req, res, next) {
        req.logout(function(err) {
            if (err) { return next(err); }
            res.clearCookie("sessionCookie")
            return res.status(200).json({"message": "loged out successfully"})
        });
    }
}
module.exports = googelAuthController
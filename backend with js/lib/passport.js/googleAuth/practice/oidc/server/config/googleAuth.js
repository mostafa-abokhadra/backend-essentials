const passport = require("passport")
const googleStrategy = require("passport-google-oidc")

passport.use(new googleStrategy({
    clientID: process.env['GOOGLE_CLIENT_ID'],
    state: false,
    clientSecret: process.env['GOOGLE_CLIENT_SECRET'],
    callbackURL: '/auth/google/redirect',
    scope: [ 'profile', 'email'] 
}, function verify(issuer, profile, cb) {
    const user = {
        email: profile.emails[0].value,
        name: profile.displayName
    };
    return cb(null, user);
}
))

passport.serializeUser(function(user, cb) {
    process.nextTick(function() {
        cb(null, { id: user.id, username: user.username, name: user.name });
    });
});

passport.deserializeUser(function(user, cb) {
    process.nextTick(function() {
        return cb(null, user);
    });
});

module.exports = passport
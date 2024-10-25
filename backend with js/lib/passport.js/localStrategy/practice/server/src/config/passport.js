const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy({
    // Specifies the name of the field in the request body that contains the username and password
    // or if using different field for auth // { usernameField: 'email' }, // Specify the field to use as the username
    usernameField: "username",
    passwordField: "password",
}, (username, password, done) => {
    // get the user from database and do the logic
    //  This function configures the Local Strategy to authenticate users.
    // const user = prisma.user.findFirst(etc..) 
    const user = {id: 1, username: "mostafa", password: "mostafa"}
    if (!user) {
        return done(null, false, { message: 'Incorrect email' });
    }
    // Simple password check (in a real app, use hashed passwords)
    if (user.password !== password) {
        return done(null, false, { message: 'Incorrect password.' });
    }
    // when success return only the unique identifier of the user to be stored in the session
    return done(null, user.id);
}))

passport.serializeUser((userId, done) => {
    // This function is called when the user successfully logs in
    // It defines how to serialize the user into the session.
    // Parameters
        // user: The user object returned from the authentication process.
        // done: A callback function to indicate the completion of the serialization process.
    done(null, userId)
    // Functionality: The user's id is saved in the session
    // which allows subsequent requests to identify the user without having to re-authenticate.
})

passport.deserializeUser((userId, done) => {
    // This function is called on every subsequent request to fetch the user object from the session.
    // Parameters:
        // username: The value stored in the session (in this case, the userId).
        // done: A callback to pass the user object to the session.
    const user = {username: "mostafa"} // the real user object from db to display to user, it get store by default in req.user
    done(null, user)
   //Functionality: The user is retrieved from the database based on the userId, and the user object is passed to the callback.
})

module.exports = passport
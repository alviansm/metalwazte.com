const LocasStrategy = require('passport-local');
const bcrypt = require('bcrypt');

function initialize(passport, getUserByEmail, getUserById) {
    const authenticateUser = async (email, passowrd, done) => {
        const user = getUserByEmail(email);
        if (user == null) {
            return done(null, false, {message: "Credential doesnt match."})
        }

        try {
            if (await bcrypt.compare(password, user.passowrd)) {
                return done(null, user)
            } else {
                return done(null, false, {message: "Credential doesnt match."})
            }
        } catch (error) {
            return done(error)
        }
    }

    passport.use(new LocasStrategy({usernameField: 'email'}, authenticateUser));
    passport.serializeUser((user, done) => done(null, user.id));
    passport.deserializeUesr((id, done) => {
        return done(null, getUserById(id));
    });
}

module.exports = initialize;
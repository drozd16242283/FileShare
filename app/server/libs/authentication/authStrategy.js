import LocalStrategy from 'passport-local/lib/strategy'

import User from './../../models/userModel'

import validate from './authValidation'


const passportStrategy = (passport) => {

    passport.serializeUser((user, done) => {
        done(null, user.id)
    })
    passport.deserializeUser((id, done) => {
        User.getUserById(id, (err, user) => {
            if (err) return done(err)

            done(err, user)
        })
    })

    passport.use('signup', new LocalStrategy(
        { passReqToCallback: true },
        (req, username, password, done) => {
            const formData = {
                username: username,
                email:    req.body.registerEmail,
                password: password
            }
            User.getUserByUsername(username, (err, user) => {
                if (err) { return done(err) }
                if (user) {
                    return done(null, false)
                } else {
                    validate(formData, (err, value) => {
                        if (err) throw err

                        let newUser = new User(formData)
                        newUser.createUser(newUser, (err, user) => {
                            if (err) throw err

                            req.session.user = user.username

                            return done(null, user)
                        })
                    })

                }
            })
        }
    ))

    passport.use('signin', new LocalStrategy(
        { usernameField: 'email',
          passwordField: 'passwd',
          passReqToCallback: true },
        (req, email, password, done) => {
            User.getUserByEmail(email, (err, user) => {
                if (err) { return done(err) }
                if (!user) { return done(null, false) }

                User.comparePassword(password, user.password, (err, isMatch) => {
                    if (err) throw err
                    if (isMatch) {
                        req.session.user = user.username
                        return done(null, user)
                    } else {
                        return done(null, false)
                    }
                })
            })
        }
    ))
}

export default passportStrategy

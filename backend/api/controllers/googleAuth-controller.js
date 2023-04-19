import passport from 'passport';
import jwt from 'jsonwebtoken';
import { OAuth2Strategy as GoogleStrategy } from 'passport-google-oauth';
import dotenv from 'dotenv';
import User from '../models/user.js';
import * as userService from '../services/user-service.js';

dotenv.config();

const passportConfig = {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: '/auth/google/callback',
    passReqToCallback: true,
};

passport.use(User.createStrategy());

passport.use(
    new GoogleStrategy(
        passportConfig,
        async (request, accessToken, refreshToken, profile, done) => {
            console.log('herere------------', profile, accessToken);
            try {
                const existingUser = await userService.findUserByEmail(profile._json.email)
                if (existingUser) {
                    return done(null, existingUser);
                }
                let user = await userService.save({ email: profile._json.email, fname: profile.name.givenName, lname: profile.name.familyName });
                // const userRole = await Roles.findOne({ role: 'user' });
                // user.roleId = userRole._id;
                user = await userService.getById(user._id);
                return done(null, user);
            } catch (err) {
                console.log(err);
                return done(err, null);
            }
        }
    )
);

export const google = async (req, res, next) => {
    try {
        console.log('------before google')
        await passport.authenticate('google', { scope: ['email', 'profile'] })(req, res, next);
        console.log('------after google');
    } catch (err) {
        console.log(err);
        next(err);
    }
}

// export const googleCallback = async (req, res, next) => {
//     passport.authenticate("google", {
//         successRedirect: "http://localhost:3000",
//         failureRedirect: "/login/failed",
//     })
// }

export const googleCallback = async (req, res, next) => {
    console.log('------before google callback')
    passport.authenticate('google', async (err, user, info) => {
        if (err) {
            return next(err);
        }
        if (!user) {
            console.log('User not found:', info);
            return res.redirect('/login');
        }
        try {
            console.log('User found:', user);
            const token = jwt.sign({ user: { "email": user.email }, id: user._id }, process.env.JWT_SECRET);
            console.log('token', token);
            // res.redirect('/');
            // console.log('------after google', res)
            // res.status(200).json({ user, token: token });
            var responseHTML = '<html><head><title>Main</title></head><body></body><script>res = %value%; window.opener.postMessage(res, "*");window.close();</script></html>'
            responseHTML = responseHTML.replace('%value%', JSON.stringify({
                user, token: token
            }));
            res.status(200).send(responseHTML);
        } catch (err) {
            console.log(err);
            next(err);
        }
    })(req, res, next);
};
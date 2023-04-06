import passport from 'passport';
import jwt from 'jsonwebtoken';
import { Strategy as FacebookStrategy } from 'passport-facebook';
import dotenv from 'dotenv';
import User from '../models/user.js';
import * as userService from '../services/user-service.js';

dotenv.config();

const passportConfig = {
    clientID: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    callbackURL: 'https://9b1e-2601-19b-e00-49d0-b081-d74e-217e-fa30.ngrok.io/auth/fb/callback'
};

passport.use(User.createStrategy());

passport.use(
    new FacebookStrategy(
        passportConfig,
        async (request, accessToken, refreshToken, profile, done) => {
            console.log('herere------------', profile, accessToken);
            try {
                const existingUser = await userService.findUserByEmail(profile._json.email)
                if (existingUser) {
                    return done(null, existingUser);
                }
                const user = await userService.save({ email: profile._json.email, fname: profile.displayName });
                return done(null, user);
            } catch (err) {
                console.log(err);
                return done(err, null);
            }
        }
    )
);

export const facebook = async (req, res, next) => {
    try {
        await passport.authenticate('facebook', { scope: ['email', 'profile'] })(req, res, next);
    } catch (err) {
        console.log(err);
        next(err);
    }
}

export const facebookCallback = async (req, res, next) => {
    passport.authenticate('facebook', async (err, user, info) => {
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
            res.redirect('/api/users');
            // res.status(200).json({ token: token });
        } catch (err) {
            console.log(err);
            next(err);
        }
    })(req, res, next);
};
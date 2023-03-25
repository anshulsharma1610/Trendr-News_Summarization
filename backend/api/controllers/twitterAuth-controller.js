import passport from 'passport';
import jwt from 'jsonwebtoken';
import { Strategy as TwitterStrategy } from 'passport-twitter';
import dotenv from 'dotenv';
import User from '../models/user.js';
import * as userService from '../services/user-service.js';

dotenv.config();

const passportConfig = {
    consumerKey: process.env.TWITTER_CLIENT_ID,
    consumerSecret: process.env.TWITTER_CLIENT_SECRET,
    callbackURL: '/auth/twitter/callback',
    // userAuthorizationURL: 'https://api.twitter.com/oauth/authenticate?oauth_callback=oob',
    // accessTokenURL: 'https://api.twitter.com/oauth/access_token?oauth_callback=oob'


};

passport.use(
    new TwitterStrategy(
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

export const twitter = async (req, res, next) => {
    try {
        await passport.authenticate('twitter', { scope: ['email', 'profile'] })(req, res, next);
    } catch (err) {
        console.log(err);
        next(err);
    }
}

export const twitterCallback = async (req, res, next) => {
    passport.authenticate('twitter', async (err, user, info) => {
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
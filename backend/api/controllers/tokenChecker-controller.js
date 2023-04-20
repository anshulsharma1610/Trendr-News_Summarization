import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import dotenv from 'dotenv';
import * as userService from '../services/user-service.js';

dotenv.config();

passport.use(
    "jwt",
    new JwtStrategy(
        {
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.JWT_SECRET,
        },
        async (payload, done) => {
            console.log("payload", payload);
            try {
                const user = await userService.getById(payload.id);
                if (user) {
                    return done(null, user);
                } else {
                    return done(null, false);
                }
            } catch (err) {
                return done(err, false);
            }
        }
    )
);

// code exports a function that authenticates the request using JWT and
// returns the user details in the response if the user is authenticated, otherwise returns an error response.

export const getDetails = (req, res, next) => {
    console.log("req", req.headers);
    passport.authenticate('jwt', { session: false }, (err, user, info) => {
        if (err) {
            return res.status(500).json({ message: 'An error occurred' });
        }
        if (!user) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        res.json({ user });
    })(req, res, next);
};
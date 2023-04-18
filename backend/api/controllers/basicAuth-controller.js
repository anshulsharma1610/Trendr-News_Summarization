import * as userService from '../services/user-service.js';
import * as userSubscriptionService from '../services/userSubscription-service.js';
import * as subscriptionService from '../services/subscriptions-service.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const signup = async (req, res, next) => {
    try {
        const { email, password, fname, lname } = req.body;
        const user = await userService.save({ email, password, fname, lname });
        const token = jwt.sign({ user: { "email": user.email }, id: user._id }, process.env.JWT_SECRET);
        res.status(201).json({ user, token: token });
    } catch (err) {
        console.log(err);
        next(err);
    }
}

export const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await userService.findUserByEmail(email);
        if (!user) {
            return res.status(401).json({ message: 'Auth failed' });
        }
        const result = await bcrypt.compare(password, user.password);
        if (!result) {
            return res.status(401).json({ message: 'Auth failed' });
        }
        const token = jwt.sign({ user: { "email": user.email }, id: user._id }, process.env.JWT_SECRET);
        console.log('token', token);

        let isUserSubbed = await userSubscriptionService.getByUserId(user._id);
        console.log('-------isUserSubbed', isUserSubbed);
        let userSubscription = {};

        if (isUserSubbed.length > 0) {
            let sub = await subscriptionService.getById(isUserSubbed[0].subId);
            console.log('-------sub', sub);
            if (Object.keys(sub).length > 0) {
                userSubscription['isUserSubbed'] = true;
                userSubscription['userSub'] = isUserSubbed[0];
                userSubscription['subscription'] = sub;
            } else {
                userSubscription['isUserSubbed'] = false;
            }
        }
        console.log(';--usre', user)
        // res.redirect('/api/users');
        res.status(200).json({ user, token: token, userSubscription });
    } catch (err) {
        console.log(err);
        next(err);
    }
}

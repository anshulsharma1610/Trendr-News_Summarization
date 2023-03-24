import * as userService from '../services/user-service.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const signup = async (req, res, next) => {
    try {
        const { email, password, fname, lname } = req.body;
        const user = await userService.save({ email, password, fname, lname });
        res.status(201).json(user);
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
        res.redirect('/api/users');
        // res.status(200).json({ token: token });
    } catch (err) {
        console.log(err);
        next(err);
    }
}

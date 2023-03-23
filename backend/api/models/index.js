import mongoose from 'mongoose';
import User from './user.js';
import Role from './role.js';
import dotenv from 'dotenv';

dotenv.config()
mongoose.Promise = Promise;

const url = process.env.DATABASEURL || 'mongodb://127.0.0.1/trendr';
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log('Error connecting to MongoDB: ', err.message);
});

export default {
    User,
    Role
};
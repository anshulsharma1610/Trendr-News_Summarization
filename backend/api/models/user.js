import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import Roles from './role.js';
import passportLocalMongoose from 'passport-local-mongoose';


// code defines a Mongoose schema for a user with properties such as first name, 
// last name, mobile, email, password, location, phone, roleId, image, preferences, and createdAt.

const userSchema = new mongoose.Schema({
    fname: String,
    lname: String,
    mobile: String,
    email: String,
    password: String,
    location: String,
    phone: String,
    roleId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Role'
    },
    image: {
        type: String,
    },
    preferences: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Prefernces'
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

userSchema.pre('save', async function (next) {
    const user = this;
    if (!user.isModified('password')) {
        return next();
    }
    try {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(user.password, salt);
        user.password = hash;
        console.log('-----user', user);
        if (!user.roleId) {
            const userRole = await Roles.findOne({ role: 'user' });
            user.roleId = userRole._id;
        }

        next();
    } catch (err) {
        next(err);
    }
});

userSchema.plugin(passportLocalMongoose);
const Users = mongoose.model('User', userSchema);

// Function to create default admin user
const createDefaultAdminUser = async () => {
    const adminRole = await Roles.findOne({ role: 'admin' });
    const adminUser = await Users.findOne({ roleId: adminRole._id });
    if (!adminUser) {
        const adminPassword = 'admin';
        // bcrypt.genSalt(10, (err, salt) => {
        //     if (err) {
        //         console.error('Error generating salt:', err);
        //         return;
        //     }
        //     bcrypt.hash(adminPassword, salt, async (err, hash) => {
        //         if (err) {
        //             console.error('Error hashing password:', err);
        //             return;
        //         }
        const adminUser = new Users({
            fname: 'Admin',
            lname: 'User',
            mobile: '',
            email: 'admin@trendr.com',
            password: adminPassword,
            location: '',
            phone: '',
            roleId: adminRole._id,
            image: '',
            preferences: [],
            createdAt: new Date(),
        });
        await adminUser.save();
        console.log('Default admin user created');
        //     });
        // });
    }
};

createDefaultAdminUser();

export default Users;
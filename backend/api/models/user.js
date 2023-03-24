import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import passportLocalMongoose from 'passport-local-mongoose';

const userSchema = new mongoose.Schema({
    fname: String,
    lname: String,
    mobile: String,
    email: String,
    password: String,
    location: String,
    roleId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Role'
    },
    image: {
        type: String,
    }
});

userSchema.pre('save', function (next) {
    const user = this;
    if (!user.isModified('password')) {
        return next();
    }
    bcrypt.genSalt(10, (err, salt) => {
        if (err) {
            return next(err);
        }
        bcrypt.hash(user.password, salt, (err, hash) => {
            if (err) {
                return next(err);
            }
            user.password = hash;
            next();
        });
    });
});

userSchema.plugin(passportLocalMongoose);
const Users = mongoose.model('User', userSchema);
export default Users;
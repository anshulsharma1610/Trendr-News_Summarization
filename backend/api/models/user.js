import mongoose from 'mongoose';

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

const Users = mongoose.model('User', userSchema);
export default Users;
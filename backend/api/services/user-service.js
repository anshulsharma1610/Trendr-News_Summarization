import User from '../models/user.js';

export const save = async (newUser) => {
    const user = new User(newUser);
    return user.save();
}

export const getAll = async () => {
    return User.find();
}

export const getById = async (id) => {
    return User.findById(id);
}

export const update = async (id, updatedUser) => {
    return User.findByIdAndUpdate(id, updatedUser);
}

export const remove = async (id) => {
    return User.findByIdAndRemove(id);
}

export const findUserByEmail = async (email) => {
    return User.findOne({ email: email })
}
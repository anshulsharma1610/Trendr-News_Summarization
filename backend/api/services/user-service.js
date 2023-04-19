import User from '../models/user.js';

export const save = async (newUser) => {
    const user = new User(newUser);
    return user.save();
}

export const getAll = async () => {
    return User.find();
}

export const getById = async (id) => {
    const result = await User.findById(id);
    return result
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

export const countAll = async (currentYear, month) => {
    const count = await User.count({
        createdAt: {
            $gte: new Date(currentYear, month - 1, 1),
            $lt: new Date(currentYear, month, 1)
        }
    });
    return count != null ? count : 0;
}
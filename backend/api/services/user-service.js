import User from '../models/user.js';


// An asynchronous function saves a new user to the database.
export const save = async (newUser) => {
    const user = new User(newUser);
    return user.save();
}

// An asynchronous function retrieves all users from the database.
export const getAll = async () => {
    return User.find();
}

// An asynchronous function retrieves a user by its ID from the database.
export const getById = async (id) => {
    const result = await User.findById(id).populate('roleId');
    return result
}

// An asynchronous function updates a user by its ID in the database.
export const update = async (id, updatedUser) => {
    return User.findByIdAndUpdate(id, updatedUser);
}

// An asynchronous function removes a user by its ID from the database.
export const remove = async (id) => {
    return User.findByIdAndRemove(id);
}

// An asynchronous function finds a user by their email in the database.
export const findUserByEmail = async (email) => {
    return User.findOne({ email: email }).populate('roleId');
}

// An asynchronous function counts the total number of users created in a specific month and year.
export const countAll = async (currentYear, month) => {
    const count = await User.count({
        createdAt: {
            $gte: new Date(currentYear, month - 1, 1),
            $lt: new Date(currentYear, month, 1)
        }
    });
    return count != null ? count : 0;
}
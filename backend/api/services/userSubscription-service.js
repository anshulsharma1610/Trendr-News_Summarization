import UserSubscriptions from '../models/userSubscriptons.js';

export const save = async (newSubscription) => {
    const userSubscriptions = new UserSubscriptions(newSubscription);
    return userSubscriptions.save();
}

export const getAll = async () => {
    return UserSubscriptions.find();
}

export const update = async (id, updatedUserSubscription) => {
    return UserSubscriptions.findByIdAndUpdate(id, updatedUserSubscription);
}

export const remove = async (id) => {
    return UserSubscriptions.findByIdAndRemove(id);
}

export const getById = async (id)=>{
    return UserSubscriptions.findById(id);
}


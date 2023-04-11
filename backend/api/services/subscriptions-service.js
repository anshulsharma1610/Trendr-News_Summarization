import Subscriptions from '../models/subscriptions.js';

export const save = async (newSubscription) => {
    const subscriptions = new Subscriptions(newSubscription);
    return subscriptions.save();
}

export const getAll = async () => {
    return Subscriptions.find();
}

export const update = async (id, updatedSubscription) => {
    return Subscriptions.findByIdAndUpdate(id, updatedSubscription);
}

export const remove = async (id) => {
    return Subscriptions.findByIdAndRemove(id);
}

export const getById = async (id)=>{
    return Subscriptions.findById(id);
}


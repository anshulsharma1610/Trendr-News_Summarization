import Subscriptions from '../models/subscriptions.js';


//asynchronous function saves a new subscription to the database.
export const save = async (newSubscription) => {
    const subscriptions = new Subscriptions(newSubscription);
    return subscriptions.save();
}
// asynchronous function retrieves all subscriptions from the database.
export const getAll = async () => {
    return Subscriptions.find();
}

// asynchronous function updates a subscription with the specified ID in the database.
export const update = async (id, updatedSubscription) => {
    return Subscriptions.findByIdAndUpdate(id, updatedSubscription);
}

//asynchronous function deletes a subscription with the specified ID from the database.
export const remove = async (id) => {
    return Subscriptions.findByIdAndRemove(id);
}

//asynchronous function retrieves a subscription with the specified ID from the database.
export const getById = async (id) => {
    const result = await Subscriptions.findById(id);
    return result;
}


import Prefernces from '../models/prefernce.js';

// asynchronous function saves a new user preference document in the database with the provided newPreference data,
//  and returns the saved document.

export const save = async (newPrefernce) => {
    const prefernce = new Prefernces(newPrefernce);
    return prefernce.save();
}

// asynchronous function retrieves all user preference documents from the database collection.
export const getAll = async () => {
    return Prefernces.find();
}

// asynchronous function updates a user preference document in the database by its ID with 
//the provided updatedPreference data.
export const update = async (id, updatedPreference) => {
    return Prefernces.findByIdAndUpdate(id, updatedPreference);
}

// asynchronous function removes a user preference document from the database by its ID.
export const remove = async (id) => {
    return Prefernces.findByIdAndRemove(id);
}

//asynchronous function  retrevies a user preference document from the database by its ID.
export const getById = async (id) => {
    return Prefernces.findById(id);
}

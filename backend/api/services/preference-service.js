import Prefernces from '../models/prefernce.js';

export const save = async (newPrefernce) => {
    const prefernce = new Prefernces(newPrefernce);
    return prefernce.save();
}

export const getAll = async () => {
    return Prefernces.find();
}

export const update = async (id, updatedPreference) => {
    return Prefernces.findByIdAndUpdate(id, updatedPreference);
}

export const remove = async (id) => {
    return Prefernces.findByIdAndRemove(id);
}

// get by id
export const getById = async (id) => {
    return Prefernces.findById(id);
}

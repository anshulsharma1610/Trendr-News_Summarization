import Role from '../models/role.js';

export const save = async (newRole) => {
    const role = new Role(newRole);
    return role.save();
}

export const getAll = async () => {
    return Role.find();
}

export const update = async (id, updatedRole) => {
    return Role.findByIdAndUpdate(id, updatedRole);
}

export const remove = async (id) => {
    return Role.findByIdAndRemove(id);
}

export const getById = async (id) => {
    const result = await Role.findById(id);
    return result;
}

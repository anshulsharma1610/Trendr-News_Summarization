import Role from '../models/role.js';


 //asynchronous function saves a new role document in the database with the provided newRole data,
 // and returns the saved document.
export const save = async (newRole) => {
    const role = new Role(newRole);
    return role.save();
}

//asynchronous function retrieves all role documents from the database.
export const getAll = async () => {
    return Role.find();
}

// asynchronous function updates a role document with the specified id with the provided updatedRole object
//  and returns the updated document.
export const update = async (id, updatedRole) => {
    return Role.findByIdAndUpdate(id, updatedRole);
}

//asynchronous function removes a role from the database based on the given ID.
export const remove = async (id) => {
    return Role.findByIdAndRemove(id);
}

export const getById = async (id) => {
    const result = await Role.findById(id);
    return result;
}

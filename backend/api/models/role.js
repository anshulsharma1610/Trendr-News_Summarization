import mongoose from 'mongoose';

// code defines a schema for roles, with a single string field for the role name.
const roleSchema = new mongoose.Schema({
    role: String,
});

// exports a model for the schema
const Roles = mongoose.model('Role', roleSchema);


// Function to create default roles
const createDefaultRoles = async () => {
    const adminRole = await Roles.findOne({ role: 'admin' });
    if (!adminRole) {
        await Roles.create({ role: 'admin' });
        console.log('Default admin role created');
    }

    const userRole = await Roles.findOne({ role: 'user' });
    if (!userRole) {
        await Roles.create({ role: 'user' });
        console.log('Default user role created');
    }
};

createDefaultRoles();

export default Roles;
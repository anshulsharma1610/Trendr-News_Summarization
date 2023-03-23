import mongoose from 'mongoose';

const roleSchema = new mongoose.Schema({
    role: String,
});

const Roles = mongoose.model('Role', roleSchema);
export default Roles;
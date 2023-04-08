import mongoose from 'mongoose';

const prefernceSchema = new mongoose.Schema({
    prefernceName: String
});

const Prefernces = mongoose.model('Prefernces', prefernceSchema);
export default Prefernces;
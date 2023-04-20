import mongoose from 'mongoose';


// code defines a schema for the  collection, which has a single field of type string.

const prefernceSchema = new mongoose.Schema({
    prefernceName: String
});

// exports a Mongoose model for the schema
const Prefernces = mongoose.model('Prefernces', prefernceSchema);
export default Prefernces;
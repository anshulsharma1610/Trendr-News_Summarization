import mongoose from 'mongoose';


// A schema for subscriptions containing properties such as title, desc, features, tenureDays and price.
const subscriptionsSchema = new mongoose.Schema({
    title: String,
    desc: String,
    features: Array,
    tenureDays: Number,
    price: Number
});

// exports a model for the schema
const Subscriptions = mongoose.model('Subscriptions', subscriptionsSchema);
export default Subscriptions;
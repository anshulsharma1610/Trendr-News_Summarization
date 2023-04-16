import mongoose from 'mongoose';

const subscriptionsSchema = new mongoose.Schema({
    title: String,
    desc: String,
    features: Array,
    tenureDays: Number,
    price: Number
});

const Subscriptions = mongoose.model('Subscriptions', subscriptionsSchema);
export default Subscriptions;
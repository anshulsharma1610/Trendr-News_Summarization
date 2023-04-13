import mongoose from 'mongoose';

const subscriptionsSchema = new mongoose.Schema({
    subTitle: String,
    subDetails: String,
    subTenureDays: Number,
    subPrice: Number
});

const Subscriptions = mongoose.model('Subscriptions', subscriptionsSchema);
export default Subscriptions;
import mongoose from 'mongoose';

const userSubscriptionsSchema = new mongoose.Schema({
    userId: String,
    subId: String,
    createdAt: Date,
    validTill: Date
});

const UserSubscriptions = mongoose.model('UserSubscriptions', userSubscriptionsSchema);
export default UserSubscriptions;
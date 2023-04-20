import mongoose from 'mongoose';

// code defines a schema for user subscriptions, with fields for user ID, subscription ID, price, 
// creation date, and expiration date.
const userSubscriptionsSchema = new mongoose.Schema({
    userId: String,
    subId: String,
    price: Number,
    createdAt: Date,
    validTill: Date
});

// before save calculate validTill date from current date and incoming parameter tenureDays
userSubscriptionsSchema.pre('save', function (next) {
    if (!this.createdAt || this.validTill) {
        this.createdAt = new Date();
        this.validTill = new Date().setDate(new Date().getDate() + 30);
    }
    next();
});

// exports a model for the schema
const UserSubscriptions = mongoose.model('UserSubscriptions', userSubscriptionsSchema);
export default UserSubscriptions;
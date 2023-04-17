import mongoose from 'mongoose';

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

const UserSubscriptions = mongoose.model('UserSubscriptions', userSubscriptionsSchema);
export default UserSubscriptions;
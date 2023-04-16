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
    const currentDate = new Date();
    this.createdAt = currentDate;
    console.log('------pre save hook in subs', this.createdAt)
    this.validTill = new Date(currentDate.setDate(currentDate.getDate() + this.tenureDays));
    next();
});

const UserSubscriptions = mongoose.model('UserSubscriptions', userSubscriptionsSchema);
export default UserSubscriptions;
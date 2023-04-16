import mongoose from 'mongoose';

const userSubscriptionsSchema = new mongoose.Schema({
    userId: String,
    subId: String,
    price: Number,
    createdAt: {
        type: Date,
        // default: Date.now
    },
    validTill: Date
});

// before save calculate validTill date from current date and incoming parameter tenureDays
userSubscriptionsSchema.pre('save', function (next) {
    // this.validTill = new Date().setDate(new Date().getDate() + 30);
    // console.log('===valid', this.validTill)
    // this.validTill = new Date(currentDate.setDate(currentDate.getDate() + this.tenureDays));
    next();
});

const UserSubscriptions = mongoose.model('UserSubscriptions', userSubscriptionsSchema);
export default UserSubscriptions;
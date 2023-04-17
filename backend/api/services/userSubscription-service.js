import UserSubscriptions from '../models/userSubscriptons.js';

export const save = async (newSubscription) => {
    const userSubscriptions = new UserSubscriptions(newSubscription);
    return userSubscriptions.save();
}

export const getAll = async () => {
    return UserSubscriptions.find();
}

export const update = async (id, updatedUserSubscription) => {
    return UserSubscriptions.findByIdAndUpdate(id, updatedUserSubscription);
}

export const remove = async (id) => {
    return UserSubscriptions.findByIdAndRemove(id);
}

export const getById = async (id) => {
    return UserSubscriptions.findById(id);
}

export const activeSubscribers = async (currentYear, month) => {
    const subscriptionCount = await UserSubscriptions.distinct('userId', {
        createdAt: {
            $gte: new Date(currentYear, month - 1, 1), // beginning of the year
            $lt: new Date(currentYear, month, 1) // beginning of the next year
        },
        validTill: {
            $gte: new Date()
        }
    });
    return subscriptionCount.length > 0 ? subscriptionCount.length : 0;
}

export const countAll = async (currentYear, month) => {
    const purchaseCount = await UserSubscriptions.count({
        createdAt: {
            $gte: new Date(currentYear, month - 1, 1),
            $lt: new Date(currentYear, month, 1)
        }
    });
    return purchaseCount != null ? purchaseCount : 0;
}

export const countSales = async (currentYear, month) => {
    const salesCount = await UserSubscriptions.aggregate([
        {
            $match: {
                createdAt: {
                    $gte: new Date(currentYear, month - 1, 1),
                    $lt: new Date(currentYear, month, 1)
                }
            }
        },
        {
            $group: {
                _id: null,
                totalSales: { $sum: '$price' }
            }
        }
    ]);
    return salesCount.length > 0 ? salesCount[0].totalSales : 0;
}

export const salesBySubId = async () => {
    const currentDate = new Date();
    const sixMonthsAgoDate = new Date();
    sixMonthsAgoDate.setMonth(currentDate.getMonth() - 6);

    const result = await UserSubscriptions.aggregate([
        {
            $match: {
                createdAt: {
                    $gte: sixMonthsAgoDate,
                    $lt: currentDate
                }
            }
        },
        {
            $group: {
                _id: {
                    subId: '$subId',
                    month: { $month: '$createdAt' },
                    year: { $year: '$createdAt' }
                },
                totalSales: { $sum: '$price' }
            }
        },
        {
            $project: {
                _id: 0,
                subId: '$_id.subId',
                month: '$_id.month',
                year: '$_id.year',
                totalSales: '$totalSales'
            }
        }
    ]);
    return result
}
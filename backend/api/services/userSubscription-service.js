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

export const getByUserId = async (id) => {
    const result = await UserSubscriptions.find({
        userId: id,
        validTill: {
            $gte: Date.now()
        },
    }).sort({ createdAt: -1 }).limit(5);
    return result;
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
    return result;
}

export const getLast5 = async () => {
    const result = UserSubscriptions.find().sort({ createdAt: -1 }).limit(5);
    return result;
}

export const getMonthlySales = async () => {
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
                    month: { $month: '$createdAt' },
                    year: { $year: '$createdAt' }
                },
                totalSales: { $sum: '$price' }
            }
        },
        {
            $project: {
                _id: 0,
                month: '$_id.month',
                year: '$_id.year',
                totalSales: '$totalSales'
            }
        }
    ]);
    return result;
}

export const ordersVsSubs = async () => {
    const pipeline = [
        {
            $group: {
                _id: "$subId",
                count: { $sum: 1 }
            }
        },
        {
            $group: {
                _id: null,
                total: { $sum: "$count" },
                subCounts: {
                    $push: {
                        subId: "$_id",
                        count: "$count"
                    }
                }
            }
        },
        {
            $project: {
                _id: 0,
                subCounts: {
                    $map: {
                        input: "$subCounts",
                        as: "subCount",
                        in: {
                            subId: "$$subCount.subId",
                            count: "$$subCount.count",
                            percentage: { $multiply: [{ $divide: ["$$subCount.count", "$total"] }, 100] }
                        }
                    }
                }
            }
        }
    ];

    const result = await UserSubscriptions.aggregate(pipeline);
    return result.length > 0 ? result[0].subCounts : 0;
}

export const getSalesAndGrowth = async () => {
    const currentDate = new Date();
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

    const salesByMonth = await UserSubscriptions.aggregate([
        {
            $match: {
                createdAt: {
                    $gte: sixMonthsAgo,
                    $lte: currentDate,
                },
            },
        },
        {
            $group: {
                _id: {
                    month: { $month: '$createdAt' },
                    year: { $year: '$createdAt' },
                },
                totalSales: { $sum: '$price' },
            },
        },
        {
            $group: {
                _id: { month: '$_id.month', year: '$_id.year' },
                totalSales: { $sum: '$totalSales' },
            },
        },
        {
            $sort: { '_id.year': 1, '_id.month': 1 },
        },
    ]);

    const growthByMonth = [];

    for (let i = 1; i < salesByMonth.length; i++) {
        const currentSales = salesByMonth[i].totalSales;
        const previousSales = salesByMonth[i - 1].totalSales;
        const growth = ((currentSales - previousSales) / previousSales) * 100;

        growthByMonth.push({
            month: `${salesByMonth[i]._id.month}/${salesByMonth[i]._id.year}`,
            growth: growth.toFixed(2),
        });
    }

    return { salesByMonth, growthByMonth };
};
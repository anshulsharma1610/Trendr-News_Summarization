import {
    setSuccessfulResponse,
    setErrorResponse,
    setPostSuccessfulResponse,
    setbodyMissingError,
    setnotFound
} from '../util/statusCodes.js';
import * as userService from '../services/user-service.js';
import * as userSubscriptionService from '../services/userSubscription-service.js';
import * as newsService from '../services/news-service.js';

// JavaScript function that calculates the percentage increase between two numerical values. It returns a value or NaN.
const calculatePercentIncrease = (value1, value2) => {
    let calc = (value2 - value1) / value1;
    return calc < Infinity ? calc : value2 * 100;
}

//asynchronous  function that retrieves analytics data for the current and previous months, 
// including user count, subscriber count, purchase count, and sales count, 
// as well as total news, likes, and comments, and returns an object with the results.

const analyticsCard = async () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1; // add 1 because getMonth() returns 0-indexed months
    const previousMonth = currentMonth - 1 || 12; // handle special case for January

    const currentUserCount = await userService.countAll(currentYear, currentMonth);
    const previousUserCount = await userService.countAll(currentYear, previousMonth);
    const percentIncreaseUser = calculatePercentIncrease(previousUserCount, currentUserCount);

    const currentCountUnique = await userSubscriptionService.activeSubscribers(currentYear, currentMonth);
    const previousCountUnique = await userSubscriptionService.activeSubscribers(currentYear, previousMonth);
    const percentIncreaseUnique = calculatePercentIncrease(previousCountUnique, currentCountUnique);

    const currentCountAll = await userSubscriptionService.countAll(currentYear, currentMonth);
    const previousCountAll = await userSubscriptionService.countAll(currentYear, previousMonth);
    const percentIncreaseAll = calculatePercentIncrease(previousCountAll, currentCountAll);

    const currentCountSales = await userSubscriptionService.countSales(currentYear, currentMonth);
    const previousCountSales = await userSubscriptionService.countSales(currentYear, previousMonth);
    const percentIncreaseSales = calculatePercentIncrease(previousCountSales, currentCountSales);

    const totalNews = await newsService.totalNews();
    const totalSocials = await newsService.totalSocials();

    const result = {
        userCount: {
            currentUserCount, previousUserCount, percentIncreaseUser
        },
        activeSubscribers: {
            currentCountUnique, previousCountUnique, percentIncreaseUnique
        },
        purchaseCount: {
            currentCountAll, previousCountAll, percentIncreaseAll
        },
        salesCount: {
            currentCountSales, previousCountSales, percentIncreaseSales
        },
        totalNews,
        totalLikes: totalSocials[0].totalLikes,
        totalComments: totalSocials[0].totalComments
    }

    return result;
}

// An asynchronous function called "columnChart" that retrieves data on user subscription sales
//  by subscription ID  and returns the result.

const coloumnChart = async () => {
    const result = await userSubscriptionService.salesBySubId();
    return result;
}

// an asynchronous function called "prevPurchases" that retrieves data on the last 5 
// purchases made by the user and returns the result.

const prevPurchases = async () => {
    const result = await userSubscriptionService.getLast5();
    return result;
}

// An asynchronous function  that retrieves data on monthly sales using the and returns the result.
const getMonthlySales = async () => {
    const result = await userSubscriptionService.getMonthlySales();
    return result;
}

// An asynchronous function  retrieves data on user subscription orders versus 
// regular orders and returns the result.

const ordersVsSubs = async () => {
    const result = await userSubscriptionService.ordersVsSubs();
    return result;
}

// An asynchronous function that retrieves data on sales and growth, and returns the result.
const getSalesAndGrowth = async () => {
    const result = await userSubscriptionService.getSalesAndGrowth();
    return result;
}

// asynchronous function that retrieves various data on sales analytics,
//  user subscriptions, and growth and returns them as a JSON object.

export const get = async (req, res) => {
    const result = [];
    result.push(
        { analyticsCard: await analyticsCard() },
        { coloumnChart: await coloumnChart() },
        { prevPurchases: await prevPurchases() },
        { monthlySales: await getMonthlySales() },
        { pieChart: await ordersVsSubs() },
        { getSalesAndGrowth: await getSalesAndGrowth() }
    );
    res.json(result);
}
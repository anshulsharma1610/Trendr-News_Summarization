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

const calculatePercentIncrease = (value1, value2) => {
    let calc = (value2 - value1) / value1;
    return calc < Infinity ? calc : value2 * 100;
}

const analyticsCard = async () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1; // add 1 because getMonth() returns 0-indexed months
    const previousMonth = currentMonth - 1 || 12; // handle special case for January

    const currentUserCount = await userService.countAll(currentYear, currentMonth);
    const previousUserCount = await userService.countAll(currentYear, previousMonth);
    const percentIncreaseUser = await userService.countAll(previousUserCount, currentUserCount);

    const currentCountUnique = await userSubscriptionService.activeSubscribers(currentYear, currentMonth);
    const previousCountUnique = await userSubscriptionService.activeSubscribers(currentYear, previousMonth);
    const percentIncreaseUnique = calculatePercentIncrease(previousCountUnique, currentCountUnique);

    const currentCountAll = await userSubscriptionService.countAll(currentYear, currentMonth);
    const previousCountAll = await userSubscriptionService.countAll(currentYear, previousMonth);
    const percentIncreaseAll = calculatePercentIncrease(previousCountAll, currentCountAll);

    const currentCountSales = await userSubscriptionService.countSales(currentYear, currentMonth);
    const previousCountSales = await userSubscriptionService.countSales(currentYear, previousMonth);
    const percentIncreaseSales = calculatePercentIncrease(previousCountSales, currentCountSales);

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
        }
    }

    return result;
}

const coloumnChart = async () => {
    const result = await userSubscriptionService.salesBySubId();
    return result;
}

export const get = async (req, res) => {
    const result = [];
    result.push(
        { analyticsCard: await analyticsCard() },
        { coloumnChart: await coloumnChart() }
    );
    res.json(result);

}
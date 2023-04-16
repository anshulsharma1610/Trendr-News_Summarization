import {
    setSuccessfulResponse,
    setErrorResponse,
    setPostSuccessfulResponse,
    setbodyMissingError,
    setnotFound
} from '../util/statusCodes.js';
import * as userService from '../services/user-service.js';
import * as userSubscriptionService from '../services/userSubscription-service.js';
import * as subscriptionsService from '../services/subscriptions-service.js';
import * as newsService from '../services/news-service.js';

export const get = async (req, res) => {
    res.json({ status: true });
}
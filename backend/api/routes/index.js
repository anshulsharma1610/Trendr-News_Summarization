import userRouter from './user-route.js';
import roleRouter from './role-route.js';
import authRouter from './auth-route.js';
import preferenceRouter from './preference-route.js';
import fetchnewsRouter from './fetchNews-route.js';
import newsRouter from './news-routes.js';
import bookmarkRouter from './bookmark-route.js';
import trendingNewsRouter from './trendingNews-route.js';
import twitterRouter from './twitter-route.js';
import checkoutRouter from './checkout-route.js';
import subscriptionRouter from './subscriptions-route.js';
import userSubscriptionsRouter from './userSubscriptions-route.js';
import analyticsRouter from './analytics-route.js';

const route = (app) => {
    app.use('/api/users', userRouter); //maps to the userRouter for handling user-related endpoints
    app.use('/api/roles', roleRouter); //maps to the roleRouter for handling role-related endpoints
    app.use('/auth', authRouter); //maps to the authRouter for handling authentication-related endpoints
    app.use('/api/preferences', preferenceRouter); //maps to the preferenceRouter for handling preference-related endpoints
    app.use('/api/fetchnews', fetchnewsRouter); //maps to the fetchnewsRouter for handling news-related endpoints
    app.use('/api/bookmark', bookmarkRouter); //maps to the bookmarkRouter for handling bookmark-related endpoints
    app.use('/api/news', newsRouter); //maps to the newsRouter for handling news-related endpoints
    app.use('/api/trends', trendingNewsRouter); //maps to the trendingNewsRouter for handling trending news-related endpoints
    app.use('/api/twitter', twitterRouter);  //maps to the twitterRouter for handling Twitter-related endpoints
    app.use('/api/checkout', checkoutRouter); //maps to the checkoutRouter for handling checkout-related endpoints
    app.use('/api/subscriptions', subscriptionRouter); //maps to the subscriptionRouter for handling subscription-related endpoints
    app.use('/api/usersubscriptions', userSubscriptionsRouter); //maps to the userSubscriptionsRouter for handling user subscription-related endpoints
    app.use('/api/analytics', analyticsRouter); //maps to the analyticsRouter for handling analytics-related endpoints
}

export default route;
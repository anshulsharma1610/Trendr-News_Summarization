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

const route = (app) => {
    app.use('/api/users', userRouter);
    app.use('/api/roles', roleRouter);
    app.use('/auth', authRouter);
    app.use('/api/preferences', preferenceRouter);
    app.use('/api/fetchnews', fetchnewsRouter);
    app.use('/api/bookmark', bookmarkRouter);
    app.use('/api/news', newsRouter);
    app.use('/api/trends', trendingNewsRouter);
    app.use('/api/twitter', twitterRouter);
    app.use('/api/checkout', checkoutRouter);
    app.use('/api/subscriptions', subscriptionRouter);
}

export default route;
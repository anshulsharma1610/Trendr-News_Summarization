import userRouter from './user-route.js';
import roleRouter from './role-route.js';
import authRouter from './auth-route.js';
import preferenceRouter from './preference-route.js';
import fetchnewsRouter from './fetchNews-route.js';
import newsRouter from './news-routes.js';
import bookmarkRouter from './bookmark-route.js';
import trendingNews from './trendingNews-route.js';
import twitter from './twitter-route.js';
import checkout from './checkout-route.js';

const route = (app) => {
    app.use('/api/users', userRouter);
    app.use('/api/roles', roleRouter);
    app.use('/auth', authRouter);
    app.use('/api/preferences', preferenceRouter);
    app.use('/api/fetchnews', fetchnewsRouter);
    app.use('/api/bookmark', bookmarkRouter);
    app.use('/api/news', newsRouter);
    app.use('/api/trends', trendingNews);
    app.use('/api/twitter', twitter);
    app.use('/api/checkout', checkout);
}

export default route;
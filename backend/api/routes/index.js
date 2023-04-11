import userRouter from './user-route.js';
import roleRouter from './role-route.js';
import authRouter from './auth-route.js';
import preferenceRouter from './preference-route.js';
import fetchnewsRouter from './fetchNews-route.js';
import newsRouter from './news-routes.js';
import subscriptionsRouter from './subscriptions-route.js';
import userSubscriptionsRouter from './userSubscriptions-routes.js';
const route = (app) => {
    app.use('/api/users', userRouter);
    app.use('/api/roles', roleRouter);
    app.use('/auth', authRouter);
    app.use('/api/preferences', preferenceRouter);

    app.use('/api/fetchnews', fetchnewsRouter);
    app.use('/api/news', newsRouter);
    app.use('/api/subscriptions', subscriptionsRouter);
    app.use('/api/usersubscriptions', userSubscriptionsRouter);



}

export default route;
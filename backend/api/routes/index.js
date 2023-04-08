import userRouter from './user-route.js';
import roleRouter from './role-route.js';
import authRouter from './auth-route.js';
import preferenceRouter from './preference-route.js';
import fetchnewsRouter from './fetchnewsRoute.js';

const route = (app) => {
    app.use('/api/users', userRouter);
    app.use('/api/roles', roleRouter);
    app.use('/auth', authRouter);
    app.use('/api/preferences', preferenceRouter);

    app.use('/api/fetchnews', fetchnewsRouter);
}

export default route;
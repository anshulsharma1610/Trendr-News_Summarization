import userRouter from './user-route.js';
import roleRouter from './role-route.js';
import authRouter from './auth-route.js';

const route = (app) => {
    app.use('/api/users', userRouter);
    app.use('/api/roles', roleRouter);
    app.use('/auth', authRouter);
}

export default route;
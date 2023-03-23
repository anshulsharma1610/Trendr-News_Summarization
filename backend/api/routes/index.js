import userRouter from './user-route.js';
import roleRouter from './role-route.js';

const route = (app) => {
    app.use('/api/users', userRouter);
    app.use('/api/roles', roleRouter);
}

export default route;
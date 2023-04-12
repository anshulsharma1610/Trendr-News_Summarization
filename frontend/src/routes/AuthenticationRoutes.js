import { lazy } from 'react';

// project imports
import Loadable from 'components/Loadable';
import AuthLayout from 'views/Layout/AuthLayout';

const Login = Loadable(lazy(() => import('views/authentication/Login')));
const Register = Loadable(lazy(() => import('views/authentication/Register')));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = {
    path: '/',
    element: <AuthLayout />,
    children: [
        {
            path: '/login',
            element: <Login />
        },
        {
            path: '/register',
            element: <Register />
        }
    ]
};

export default AuthenticationRoutes;

import { lazy } from 'react';

// project imports
import Loadable from 'components/Loadable';
import AuthLayout from 'views/Layout/AuthLayout';
import ProtectedRoute from 'components/ProtectedRoute';

const Login = Loadable(lazy(() => import('views/authentication/Login')));
const Register = Loadable(lazy(() => import('views/authentication/Register')));
const NotFound = Loadable(lazy(() => import('components/NotFound')));
const { Navigate } = require('react-router-dom');

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = {
    path: '/',
    element: <AuthLayout />,
    children: [
        {
            path: '/',
            element: <Login />,
        },
        {
            path: '/login',
            element: <Login />,
        },
        {
            path: '/register',
            element: <Register />,
        },
        {
            path: '/404',
            element: <NotFound />
        },
        {
            path: '/*',
            element: <Navigate to="/404" />
        }
    ]
};

export default AuthenticationRoutes;

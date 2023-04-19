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
    element: <ProtectedRoute component={AuthLayout} />,
    children: [
        {
            path: '/',
            element: <ProtectedRoute component={Login} />,
        },
        {
            path: '/login',
            element: <ProtectedRoute component={Login} />,
        },
        {
            path: '/register',
            element: <ProtectedRoute component={Register} />,
        },
        {
            path: '/404',
            element: <ProtectedRoute component={NotFound} />
        },
        {
            path: '/*',
            element: <Navigate to="/404" />
        }
    ]
};

export default AuthenticationRoutes;

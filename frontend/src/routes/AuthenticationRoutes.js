import { lazy } from 'react';

// project imports
import Loadable from 'components/Loadable';
import AuthLayout from 'views/Layout/AuthLayout';
import ProtectedRoute from 'components/ProtectedRoute';

const Login = Loadable(lazy(() => import('views/authentication/Login')));
const Register = Loadable(lazy(() => import('views/authentication/Register')));

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
        }
    ]
};

export default AuthenticationRoutes;

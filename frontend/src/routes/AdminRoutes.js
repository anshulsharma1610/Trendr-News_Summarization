import { lazy } from 'react';

// project imports
import UserLayout from 'views/Layout/UserLayout';
import Loadable from 'components/Loadable';
import NotFound from 'components/NotFound';
import { Navigate } from 'react-router-dom';

const Dashboard = Loadable(lazy(() => import('views/AdminDashboard/Dashboard')));
// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <UserLayout />,
    children: [
        {
            path: '/dashboard',
            element: <Dashboard />
        },
        {
            path: '/404',
            element: <NotFound />
        },
        {
            path: '*',
            element: <Navigate to="/404" />
        }

    ]
};

export default MainRoutes;
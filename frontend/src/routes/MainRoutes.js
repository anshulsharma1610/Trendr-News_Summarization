import { lazy } from 'react';

// project imports
import UserLayout from 'views/Layout/UserLayout';
import Loadable from 'components/Loadable';
import TrendingNews from 'views/TrendingNews';
import Prefernces from 'views/Prefernces';
import AdminDashboard from 'views/AdminDashboard';

const HelloWorld = Loadable(lazy(() => import('views/HelloWorld')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <UserLayout />,
    children: [
        {
            path: '/',
            element: <HelloWorld />
        },
        {
            path: '/anshul',
            element: <HelloWorld />
        },
        {
            path: '/trendingnews',
            element: <TrendingNews />
        },
        {
            path: '/prefernces',
            element: <Prefernces />
        },
        {
            path: '/admincrud',
            element: <AdminDashboard />
        }

    ]
};

export default MainRoutes;
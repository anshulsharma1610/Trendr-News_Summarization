import { lazy } from 'react';

// project imports
import UserLayout from 'views/Layout/UserLayout';
import Loadable from 'components/Loadable';
import TrendingNews from 'views/TrendingNews';
import Prefernces from 'views/Prefernces';
import Bookmarks from 'views/Bookmarks/Bookmarks';
import AdminCRUD from 'views/AdminDashboard/AdminCRUD';
import Profile from 'views/Profile';
import Checkout from 'views/Checkout/SubscriptionPlans/SubscriptionPlans';
import Success from 'views/Checkout/Success';
import Cancel from 'views/Checkout/Cancel';
import NotFound from 'components/NotFound';
import { Navigate } from 'react-router-dom';
import { Check } from '@mui/icons-material';

const HelloWorld = Loadable(lazy(() => import('views/HelloWorld')));
const NewsFeed = Loadable(lazy(() => import('views/NewsFeed/NewsFeed/NewsFeed')));
// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <UserLayout />,
    children: [
        {
            path: '/',
            element: <NewsFeed />
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
            path: '/bookmarks',
            element: <Bookmarks />
        },
        {
            path: '/prefernces',
            element: <Prefernces />
        },
        {
            path: '/admincrud',
            element: <AdminCRUD />
        },
        {
            path: '/account',
            element: <Profile />
        },
        {
            path: '/checkout',
            element: <Checkout />
        },
        {
            path: '/success',
            element: <Success />
        },
        {
            path: '/cancel',
            element: <Cancel />
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
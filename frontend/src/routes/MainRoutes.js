import { lazy } from 'react';

// project imports
import UserLayout from 'views/Layout/UserLayout';
import Loadable from 'components/Loadable';
import TrendingNews from 'views/TrendingNews';
import Preferences from 'views/Preferences';
import Bookmarks from 'views/Bookmarks/Bookmarks';
import AdminCRUD from 'views/AdminDashboard/AdminUserTable';
import Profile from 'views/Profile';
import SearchResults from 'views/Search/SearchResults';
import Checkout from 'views/Checkout/SubscriptionPlans/SubscriptionPlans';
import Success from 'views/Checkout/Success';
import Cancel from 'views/Checkout/Cancel';
import NotFound from 'components/NotFound';
import { Navigate } from 'react-router-dom';
import { Check } from '@mui/icons-material';
import AdminPreferences from 'views/AdminDashboard/AdminPreference';
import AdminSubscription from 'views/AdminDashboard/AdminSubscription';
import UserSubscriptions from 'views/AdminDashboard/UserSubscriptions';
import AdminNews from 'views/AdminDashboard/AdminNews';


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
            path: '/preferences',
            element: <Preferences />
        },
        {
            path: '/bookmarks',
            element: <Bookmarks />
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
        },
        {
            path: '/admincrud/preferences',
            element: <AdminPreferences />

        },
        {
            path: '/search',
            element: <SearchResults />
        }
        ,
        {
            path: '/admincrud/subscription',
            element: <AdminSubscription />
        } ,
        {
            path: '/admincrud/userSubscription',
            element: <UserSubscriptions />
        },
        {
            path: '/admincrud/users',
            element: <AdminCRUD />
        },
        {
            path: '/admincrud/news',
            element: <AdminNews />
        }
    ]
};

export default MainRoutes;
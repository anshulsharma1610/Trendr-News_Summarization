import { lazy } from 'react';

// project imports
import UserLayout from 'views/Layout/UserLayout';
import Loadable from 'components/Loadable';
import { Navigate } from 'react-router-dom';
import ProtectedRoute from 'components/ProtectedRoute';

const Checkout = Loadable(lazy(() => import('views/Checkout/SubscriptionPlans/SubscriptionPlans')));
const Success = Loadable(lazy(() => import('views/Checkout/Success')));
const Cancel = Loadable(lazy(() => import('views/Checkout/Cancel')));
const NewsFeed = Loadable(lazy(() => import('views/NewsFeed/NewsFeed/NewsFeed')));
const NotFound = Loadable(lazy(() => import('components/NotFound')));
const SearchResults = Loadable(lazy(() => import('views/Search/SearchResults')));
const Profile = Loadable(lazy(() => import('views/Profile')));
const Bookmarks = Loadable(lazy(() => import('views/Bookmarks/Bookmarks')));
const Preferences = Loadable(lazy(() => import('views/Preferences')));
const TrendingNews = Loadable(lazy(() => import('views/TrendingNews')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/user',
    element: <UserLayout />,
    children: [
        {
            path: '/user',
            element: <NewsFeed />
        },
        {
            path: '/user/trending',
            element: <TrendingNews />
        },
        {
            path: '/user/preferences',
            element: <Preferences />
        },
        {
            path: '/user/bookmarks',
            element: <Bookmarks />
        },
        {
            path: '/user/account',
            element: <Profile />
        },
        {
            path: '/user/checkout',
            element: <Checkout />
        },
        {
            path: '/user/success',
            element: <Success />
        },
        {
            path: '/user/cancel',
            element: <Cancel />
        },
        {
            path: '/user/404',
            element: <NotFound />
        },
        {
            path: '/user/*',
            element: <Navigate to="/user/404" />
        },
        {
            path: '/user/search',
            element: <SearchResults />
        },
    ]
};

export default MainRoutes;
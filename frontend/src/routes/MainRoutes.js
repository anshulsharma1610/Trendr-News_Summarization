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
    element: <ProtectedRoute component={UserLayout} />,
    children: [
        {
            path: '/user',
            element: <ProtectedRoute component={NewsFeed} />
        },
        {
            path: '/user/trending',
            element: <TrendingNews />
        },
        {
            path: '/user/preferences',
            element: <ProtectedRoute component={Preferences} />
        },
        {
            path: '/user/bookmarks',
            element: <ProtectedRoute component={Bookmarks} />
        },
        {
            path: '/user/account',
            element: <ProtectedRoute component={Profile} />
        },
        {
            path: '/user/checkout',
            element: <ProtectedRoute component={Checkout} />
        },
        {
            path: '/user/success',
            element: <ProtectedRoute component={Success} />
        },
        {
            path: '/user/cancel',
            element: <ProtectedRoute component={Cancel} />
        },
        {
            path: '/user/404',
            element: <ProtectedRoute component={NotFound} />
        },
        {
            path: '/user/*',
            element: <Navigate to="/user/404" />
        },
        {
            path: '/user/search',
            element: <ProtectedRoute component={SearchResults} />
        },
    ]
};

export default MainRoutes;
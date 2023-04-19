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
    path: '/',
    element: <UserLayout />,
    children: [
        {
            path: '/',
            element: <ProtectedRoute component={NewsFeed} />
        },
        {
            path: '/trending',
            element: <TrendingNews />
        },
        {
            path: '/trending',
            element: <TrendingNews />
        },
        {
            path: '/preferences',
            element: <ProtectedRoute component={Preferences} />
        },
        {
            path: '/bookmarks',
            element: <ProtectedRoute component={Bookmarks} />
        },
        {
            path: '/account',
            element: <ProtectedRoute component={Profile} />
        },
        {
            path: '/checkout',
            element: <ProtectedRoute component={Checkout} />
        },
        {
            path: '/success',
            element: <ProtectedRoute component={Success} />
        },
        {
            path: '/cancel',
            element: <ProtectedRoute component={Cancel} />
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
            path: '/search',
            element: <ProtectedRoute component={SearchResults} />
        },
    ]
};

export default MainRoutes;
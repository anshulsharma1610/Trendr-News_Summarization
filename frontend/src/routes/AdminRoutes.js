import { lazy } from 'react';

// project imports
import AdminLayout from 'views/Layout/AdminLayout';
import Loadable from 'components/Loadable';
import NotFound from 'components/NotFound';
import { Navigate } from 'react-router-dom';
import ProtectedRoute from 'components/ProtectedRoute';

const Dashboard = Loadable(lazy(() => import('views/AdminDashboard/Dashboard')));
const PreferencesCrud = Loadable(lazy(() => import('views/AdminDashboard/AdminPreference')));
const SubscriptionCrud = Loadable(lazy(() => import('views/AdminDashboard/AdminSubscription')));
const UserSubscriptionCrud = Loadable(lazy(() => import('views/AdminDashboard/UserSubscriptions')));
const NewsCrud = Loadable(lazy(() => import('views/AdminDashboard/AdminNews')));
const UserCrud = Loadable(lazy(() => import('views/AdminDashboard/AdminUserTable')));
const Profile = Loadable(lazy(() => import('views/Profile')));
// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/admin',
    element: <AdminLayout />,
    children: [
        {
            path: '/admin',
            element: <Dashboard />
        },
        {
            path: '/admin/customer',
            element: <UserCrud />
        },
        {
            path: '/admin/preferences',
            element: <PreferencesCrud />
        },
        {
            path: '/admin/subscription',
            element: <SubscriptionCrud />
        },
        {
            path: '/admin/customersubscription',
            element: <UserSubscriptionCrud />
        },
        {
            path: '/admin/news',
            element: <NewsCrud />
        },
        {
            path: '/admin/404',
            element: <NotFound />
        },
        {
            path: '/admin/account',
            element: <Profile />
        },
        {
            path: '/admin/*',
            element: <Navigate to="/admin/404" />
        }
    ]
};

export default MainRoutes;
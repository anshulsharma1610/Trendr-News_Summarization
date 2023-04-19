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
// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <AdminLayout />,
    children: [
        {
            path: '/dashboard',
            element: <ProtectedRoute component={Dashboard} />
        },
        {
            path: '/admin/user',
            element: <ProtectedRoute component={UserCrud} />
        },
        {
            path: '/admin/preferences',
            element: <ProtectedRoute component={PreferencesCrud} />
        },
        {
            path: '/admin/subscription',
            element: <ProtectedRoute component={SubscriptionCrud} />
        },
        {
            path: '/admin/usersubscription',
            element: <ProtectedRoute component={UserSubscriptionCrud} />
        },
        {
            path: '/admin/news',
            element: <ProtectedRoute component={NewsCrud} />
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
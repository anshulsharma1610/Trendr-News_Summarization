import { lazy } from 'react';

// project imports
import UserLayout from 'views/Layout/UserLayout';
import Loadable from 'components/Loadable';

const HelloWorld = Loadable(lazy(() => import('views/HelloWorld')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <UserLayout />,
    children: [
        {
            path: '/',
            element: <HelloWorld />
        }
    ]
};

export default MainRoutes;

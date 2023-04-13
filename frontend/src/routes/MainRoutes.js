import { lazy } from 'react';

// project imports
import UserLayout from 'views/Layout/UserLayout';
import Loadable from 'components/Loadable';

const HelloWorld = Loadable(lazy(() => import('views/HelloWorld')));
const Prefernces = Loadable(lazy(() => import('views/Prefernces')));


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
            path: '/prefernces',
            element: <Prefernces />
        }
        
    ]
};

export default MainRoutes;

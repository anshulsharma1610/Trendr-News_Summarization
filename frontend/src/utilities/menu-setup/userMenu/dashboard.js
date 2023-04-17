import { IconDashboard } from '@tabler/icons';

// constant
const icons = { IconDashboard };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
    id: 'dashboard',
    title: 'Dashboard',
    type: 'group',
    children: [
        {
            id: 'default',
            title: 'Dashboard',
            type: 'item',
            url: '/',
            icon: icons.IconDashboard,
            breadcrumbs: false
        },
        {
            id: 'login',
            title: 'Login',
            type: 'item',
            url: '/login',
            icon: icons.IconDashboard,
            breadcrumbs: false
        },
        {
            id: 'register',
            title: 'Register',
            type: 'item',
            url: '/register',
            icon: icons.IconDashboard,
            breadcrumbs: false
        },
        {
            id: 'trendingnews',
            title: 'TrendingNews',
            type: 'item',
            url: '/trendingnews',
            icon: icons.IconDashboard,
            breadcrumbs: false
        },
        {
            id: 'bookmarks',
            title: 'Bookmarks',
            type: 'item',
            url: '/bookmarks',
            icon: icons.IconDashboard,
            breadcrumbs: false
        },
        {
            id: 'AdminDashboard',
            title: 'AdminDashboard',
            type: 'item',
            url: '/admincrud',
            icon: icons.IconDashboard,
            breadcrumbs: false
        }
    ]
};

export default dashboard;

import { IconDashboard } from '@tabler/icons';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import HomeIcon from '@mui/icons-material/Home';


// constant
const icons = {
    IconDashboard, DashboardIcon, LoginIcon, HowToRegIcon,
    TrendingUpIcon, BookmarksIcon, AdminPanelSettingsIcon, CreditCardIcon, PersonAddAltIcon,
    AccountBoxIcon, LibraryAddIcon, NewspaperIcon, HomeIcon
};

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
    id: 'dashboard',
    title: 'Menu',
    type: 'group',
    children: [
        {
            id: 'default',
            title: 'Home',
            type: 'item',
            url: '/news',
            icon: icons.HomeIcon,
            breadcrumbs: false
        },
        {
            id: 'login',
            title: 'Login',
            type: 'item',
            url: '/login',
            icon: icons.LoginIcon,
            breadcrumbs: false
        },
        {
            id: 'register',
            title: 'Register',
            type: 'item',
            url: '/register',
            icon: icons.HowToRegIcon,
            breadcrumbs: false
        },
        {
            id: 'trendingnews',
            title: 'TrendingNews',
            type: 'item',
            url: '/trending',
            icon: icons.TrendingUpIcon,
            breadcrumbs: false
        },
        {
            id: 'bookmarks',
            title: 'Bookmarks',
            type: 'item',
            url: '/bookmarks',
            icon: icons.BookmarksIcon,
            breadcrumbs: false
        },
        {
            id: 'Subscriptions',
            title: 'Subscriptions',
            type: 'item',
            url: '/checkout',
            icon: icons.CreditCardIcon,
            breadcrumbs: false
        },
    ]
};

export default dashboard;

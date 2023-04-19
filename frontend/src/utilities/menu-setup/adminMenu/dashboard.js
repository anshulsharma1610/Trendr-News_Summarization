import {
    IconDashboard
} from '@tabler/icons';
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
    IconDashboard,
    DashboardIcon,
    LoginIcon,
    HowToRegIcon,
    TrendingUpIcon,
    BookmarksIcon,
    AdminPanelSettingsIcon,
    CreditCardIcon,
    PersonAddAltIcon,
    AccountBoxIcon,
    LibraryAddIcon,
    NewspaperIcon,
    HomeIcon
};

const dashboard = {
    id: 'dashboard',
    title: 'Menu',
    type: 'group',
    children: [
        {
            id: 'Dashboard',
            title: 'Dashboard',
            type: 'item',
            url: '/admin',
            icon: icons.AdminPanelSettingsIcon,
            breadcrumbs: false
        },
        {
            id: 'NEWS',
            title: 'NEWS',
            type: 'item',
            url: '/admin/news',
            icon: icons.NewspaperIcon,
            breadcrumbs: false
        },
        {
            id: 'Users',
            title: 'Users',
            type: 'item',
            url: '/admin/customer',
            icon: icons.PersonAddAltIcon,
            breadcrumbs: false
        },
        {
            id: 'Subscriptions',
            title: 'Subscriptions',
            type: 'item',
            url: '/admin/subscription',
            icon: icons.CreditCardIcon,
            breadcrumbs: false
        },
        {
            id: 'User-Subscriptions',
            title: 'User Subscriptions',
            type: 'item',
            url: '/admin/customersubscription',
            icon: icons.AccountBoxIcon,
            breadcrumbs: false
        },
        {
            id: 'Preferences',
            title: 'Preferences',
            type: 'item',
            url: '/admin/preferences',
            icon: icons.LibraryAddIcon,
            breadcrumbs: false
        },
    ]
};

export default dashboard;
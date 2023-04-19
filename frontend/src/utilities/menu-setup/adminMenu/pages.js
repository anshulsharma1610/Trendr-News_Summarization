// assets
import { IconKey } from '@tabler/icons';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';

// constant
const icons = {
    IconKey, LoginIcon, HowToRegIcon
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const authentication = {
    id: 'authentication',
    title: 'Authentication',
    // caption: 'Pages Caption',
    type: 'group',
    children: [
        {
            id: 'authentication',
            title: 'Authentication',
            type: 'collapse',
            icon: icons.IconKey,
            children: [
                {
                    id: 'login',
                    title: 'Login',
                    type: 'item',
                    url: '/login',
                    target: true,
                    icon: icons.LoginIcon,
                },
                {
                    id: 'register',
                    title: 'Register',
                    type: 'item',
                    url: '/register',
                    target: true,
                    icon: icons.HowToRegIcon,
                }
            ]
        }
    ]
};

export default authentication;

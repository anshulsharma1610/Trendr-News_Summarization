import { useRoutes } from 'react-router-dom';

// routes
import MainRoutes from './MainRoutes';
import AdminRoutes from './AdminRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
    return useRoutes([MainRoutes, AdminRoutes, AuthenticationRoutes]);
}

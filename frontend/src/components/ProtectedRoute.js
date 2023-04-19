import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Protected = ({ component: Component }) => {
    const isAuthenticated = useSelector((state) => state.user.isLoggedIn);
    let role;
    if (isAuthenticated) {
        role = useSelector((state) => state.user.user.user.roleId.role);
    }
    const location = useLocation();
    console.log('---------loca', location)
    if (!isAuthenticated && (location.pathname !== "/login" && location.pathname !== "/register")) {
        return <Navigate to="/login" replace />;
    }

    if (location.pathname === "/") {
        return <Navigate to="/login" replace />;
    }

    if (role === "admin" && location.pathname.includes("/user")) {
        return <Navigate to="/admin" replace />;
    }

    if (role === "user" && location.pathname.includes("/admin")) {
        return <Navigate to="/user" replace />;
    }

    return <Component />;
};

export default Protected;
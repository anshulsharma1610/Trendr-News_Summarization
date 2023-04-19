import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Protected = ({ component: Component }) => {
    const { isAuthenticated } = useSelector((state) => state.user.isLoggedIn);
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }
    return <Component />;
};

export default Protected;
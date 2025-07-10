import { Navigate } from "react-router-dom";

interface Props {
    children: React.ReactNode;
}

const ProtectedRoute = ({ children }: Props) => {
    const token = localStorage.getItem("token");

    if (!token) {
        return <Navigate to="/not_found" replace />;
    }

    return <>{children}</>;
};

export default ProtectedRoute;
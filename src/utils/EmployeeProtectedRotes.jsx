import { Outlet, Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useContext, useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import AuthContext from "../contexts/AuthContext";
import LoadingSpin from "../components/elements/LoadingSpin";

const EmployeeProtectedRoutes = () => {
    const { verifyToken } = useAuth();
    const token = Cookies.get("token");
    const [isAuth, setIsAuth] = useState(null);
    const [, setUserRole] = useContext(AuthContext);

    useEffect(() => {
        const getAccess = async () => {
            if (token) {
                try {
                    const response = await verifyToken(token);
                    setUserRole(response.data.role);
                    setIsAuth(
                        response.data.role === "employee" &&
                            response.data.isValid,
                    );
                } catch (error) {
                    console.error("Token verification failed:", error);
                    setIsAuth(false);
                }
            } else {
                setIsAuth(false);
            }
        };

        getAccess();
    }, [token, verifyToken]);

    if (isAuth === null) {
        return (
            <div className="flex h-screen w-full items-center justify-center bg-primary-black">
                <LoadingSpin />
            </div>
        );
    }

    return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default EmployeeProtectedRoutes;

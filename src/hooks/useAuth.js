import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export default function useAuth() {
    const navigate = useNavigate();

    const managerLogin = async (email, password) => {
        try {
            const response = await axios.post("/api/manager/login", {
                email,
                password,
            });

            console.log(response);
            if (response.data.data.token) {
                console.log(response.data.data.token);
                Cookies.set("token", response.data.data.token);
            }

            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    };

    const verifyToken = async (token) => {
        try {
            const response = await axios.get("/api/token", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    };

    const registerManager = async (name, name_business, email, password) => {
        try {
            const response = await axios.post("/api/manager/register", {
                name,
                name_business,
                email,
                password,
            });

            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    };

    const employeeLogin = async (email, password) => {
        try {
            const response = await axios.post("/api/employee/login", {
                email,
                password,
            });

            console.log(response);
            if (response.data.data.token) {
                console.log(response.data.data.token);
                Cookies.set("token", response.data.data.token);
            }

            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    };

    const changePassword = async (old_password, new_password) => {
        try {
            console.log(old_password, new_password);
            const response = await axios.put(
                "/api/employee/changePassword",
                {
                    old_password,
                    new_password,
                },
                {
                    headers: {
                        Authorization: `Bearer ${Cookies.get("token")}`,
                    },
                },
            );

            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    };

    const logOut = async () => {
        Cookies.remove("token");
        navigate("/login");
    };

    return {
        managerLogin,
        verifyToken,
        logOut,
        registerManager,
        employeeLogin,
        changePassword,
    };
}

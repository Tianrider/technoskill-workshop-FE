import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

// Retrieve the API URL from environment variables
const API_URL = import.meta.env.VITE_API_URL;

export default function useAuth() {
    const navigate = useNavigate();

    const managerLogin = async (email, password) => {
        try {
            const response = await axios.post(`${API_URL}/manager/login`, {
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
            const response = await axios.get(`${API_URL}/token`, {
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
            const response = await axios.post(`${API_URL}/manager/register`, {
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
            const response = await axios.post(`${API_URL}/employee/login`, {
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
                `${API_URL}/employee/changePassword`,
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

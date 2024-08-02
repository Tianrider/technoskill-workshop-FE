import axios from "axios";
import Cookies from "js-cookie";

// Retrieve the API URL from environment variables
const API_URL = import.meta.env.VITE_API_URL;

export default function useEmployee() {
    const getAllEmployees = async () => {
        try {
            const response = await axios.get(
                `${API_URL}/manager/getAllEmployeeByManager`,
                {
                    headers: {
                        Authorization: `Bearer ${Cookies.get("token")}`,
                    },
                },
            );
            console.log(response);
            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    };

    const addEmployee = async (name, email, division, salary) => {
        try {
            const response = await axios.post(
                `${API_URL}/manager/addEmployee`,
                {
                    name,
                    email,
                    division,
                    salary,
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

    const deleteEmployee = async (id) => {
        try {
            const response = await axios.delete(
                `${API_URL}/manager/deleteEmployeeByUid/${id}`,
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

    const updateEmployeeByManager = async (id, division, salary) => {
        try {
            const response = await axios.put(
                `${API_URL}/manager/updateEmployeeByUid/${id}`,
                {
                    division,
                    salary,
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

    const getEmployee = async () => {
        try {
            const response = await axios.get(`${API_URL}/employee/getByUid`, {
                headers: {
                    Authorization: `Bearer ${Cookies.get("token")}`,
                },
            });
            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    };

    const updateEmployee = async (
        name,
        picture_url,
        birth_date,
        nik_number,
        address,
        salary,
        division,
        email,
    ) => {
        try {
            const response = await axios.put(
                `${API_URL}/employee/updateByUid`,
                {
                    name,
                    picture_url,
                    birth_date,
                    nik_number,
                    address,
                    salary,
                    division,
                    email,
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

    return {
        getAllEmployees,
        addEmployee,
        deleteEmployee,
        updateEmployeeByManager,
        getEmployee,
        updateEmployee,
    };
}

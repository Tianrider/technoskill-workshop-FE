import axios from "axios";
import Cookies from "js-cookie";

export default function useEmployee() {
    const getAllEmployees = async () => {
        try {
            const response = await axios.get(
                "/api/manager/getAllEmployeeByManager",
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
                "/api/manager/addEmployee",
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
                `/api//manager/deleteEmployeeByUid/${id}`,
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
                `/api/manager/updateEmployeeByUid/${id}`,
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
            const response = await axios.get(`/api/employee/getByUid`, {
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
                "/api/employee/updateByUid",
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

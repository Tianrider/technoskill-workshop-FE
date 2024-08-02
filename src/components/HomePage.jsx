import DashboardElement from "./elements/DashboardElement";
import DashboardTable from "./elements/AdminTable/DashboardTable";
import EmployeeContext from "../contexts/EmployeeContext";
import { useEffect, useState } from "react";
import useEmployee from "../hooks/useEmployee";
import { UserRound } from "lucide-react";
import axios from "axios";
import Cookies from "js-cookie";

const API_URL = import.meta.env.VITE_API_URL;

export default function HomePage() {
    const [employeeData, setEmployeeData] = useState([]);
    const [fetchingDataLoading, setFetchingDataLoading] = useState(true);
    const [logs, setLogs] = useState([]);
    const { getAllEmployees } = useEmployee();

    useEffect(() => {
        const getLogs = async () => {
            try {
                const response = await axios.get(
                    `${API_URL}/manager/getLogsByManager`,
                    {
                        headers: {
                            Authorization: `Bearer ${Cookies.get("token")}`,
                        },
                    },
                );
                console.log(response.data.data[0]);
                const sortedLogs = response.data.data.sort(
                    (a, b) => new Date(b.time) - new Date(a.time),
                );
                setLogs(sortedLogs);
            } catch (error) {
                console.error(error);
            }
        };

        getLogs();
    }, []);

    useEffect(() => {
        const fetchEmployeeData = async () => {
            try {
                setFetchingDataLoading(true);
                const response = await getAllEmployees();
                setEmployeeData(response.data);
                setFetchingDataLoading(false);
            } catch (error) {
                console.error(error);
            }
        };

        fetchEmployeeData();
    }, []);

    const formatCurrency = (number) => {
        return `Rp${number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
    };

    return (
        <EmployeeContext.Provider value={[employeeData, setEmployeeData]}>
            <div className="h-screen w-full bg-primary-black">
                <DashboardElement />
                <div className="h-full w-full md:pl-36">
                    <div className="flex h-full w-full flex-col items-center justify-center gap-8 p-8 font-sf">
                        <div className="hidden w-full text-5xl font-bold text-white md:block">
                            DashBoard
                        </div>
                        <div className="mt-20 flex h-1/5 w-full gap-8 md:mt-0">
                            <div className="hidden h-full w-1/5 flex-col items-center justify-between rounded-md border-2 border-gray-500 border-opacity-10 bg-secondary-gray p-4 text-white md:flex">
                                <div className="mt-4 flex w-full items-center justify-center gap-3 text-6xl font-bold text-primary-orange">
                                    {employeeData.length}{" "}
                                    <UserRound
                                        size={48}
                                        className="text-white"
                                    />
                                </div>
                                <h1 className="text-sm font-bold tracking-widest">
                                    Total Employee
                                </h1>
                            </div>
                            <div className="hidden h-full w-auto flex-col items-center justify-between rounded-md border-2 border-gray-500 border-opacity-10 bg-secondary-gray p-4 px-6 text-white md:flex">
                                <div className="mt-4 flex w-full items-center justify-center gap-3 text-[3vw] font-bold text-primary-orange">
                                    {formatCurrency(
                                        employeeData.reduce(
                                            (acc, curr) => acc + curr.salary,
                                            0,
                                        ),
                                    )}
                                </div>
                                <h1 className="text-[1vw] font-bold tracking-widest">
                                    Total Salary to Be Paid
                                </h1>
                            </div>
                            <div className="flex h-full flex-1 flex-col rounded-md border-2 border-gray-500 border-opacity-10 bg-secondary-gray p-4 text-white">
                                <div className="hidden-scrollbar z-10 h-full w-full overflow-auto">
                                    <table className="z-10 w-full table-fixed">
                                        <thead className="sticky top-0 z-10 border-b-[1px] border-gray-500/50 bg-secondary-gray text-primary-orange">
                                            <tr>
                                                <th className="pl-2 text-left">
                                                    Logs
                                                </th>
                                                <th className="text-left">
                                                    Role
                                                </th>
                                                <th className="text-left">
                                                    Logged In At
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {logs.map((log, index) => (
                                                <tr key={index}>
                                                    <td className="truncate pl-2">
                                                        {log.name}
                                                    </td>
                                                    <td className="truncate">
                                                        {log.role}
                                                    </td>
                                                    <td className="truncate">
                                                        {new Date(
                                                            log.time,
                                                        ).toLocaleString()}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <DashboardTable isLoading={fetchingDataLoading} />
                    </div>
                </div>
            </div>
        </EmployeeContext.Provider>
    );
}

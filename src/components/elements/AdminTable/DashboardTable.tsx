import React, { useContext } from "react";
import TableCell from "./TableCell";
import EmployeeContext from "../../../contexts/EmployeeContext";
import LoadingSpin from "../LoadingSpin";

export default function DashboardTable({ isLoading }) {
    const [data, setData] = useContext(EmployeeContext);
    return (
        <div className="h-full w-full flex-1 overflow-y-auto rounded-md border-2 border-gray-500 border-opacity-10 bg-secondary-gray px-4 py-2">
            <div className="table-scrollbar h-full w-full overflow-auto">
                <table className="w-full table-fixed">
                    <thead className="sticky top-0 cursor-default border-b-2 border-gray-400 border-opacity-20 bg-secondary-gray text-left text-white text-opacity-50">
                        <tr>
                            <th className="hidden w-[6%] px-4 py-2 pb-3 md:table-cell">
                                Image
                            </th>
                            <th className="w-[34%] px-4 py-2 pb-3">Name</th>
                            <th className="w-[25%] px-4 py-2 pb-3">Division</th>
                            <th className="hidden w-[25%] px-4 py-2 pb-3 md:table-cell">
                                Salary
                            </th>
                            <th className="w-[20%] px-4 py-2 pb-3 md:w-[10%]">
                                Actions
                            </th>
                        </tr>
                    </thead>

                    {isLoading ? (
                        <tr>
                            <td colSpan={5}>
                                <div className="flex h-auto w-full items-center justify-center pt-8">
                                    <LoadingSpin />
                                </div>
                            </td>
                        </tr>
                    ) : (
                        <tbody className="w-full">
                            {data.map((item, index) => (
                                <TableCell key={index} item={item} />
                            ))}
                        </tbody>
                    )}
                </table>
            </div>
        </div>
    );
}

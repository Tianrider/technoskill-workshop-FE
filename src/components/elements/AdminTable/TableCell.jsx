import { EllipsisVertical, SquarePen, TrashIcon } from "lucide-react";
import { useContext, useState } from "react";
import useEmployee from "../../../hooks/useEmployee";
import { toast, Toaster } from "sonner";
import EmployeeContext from "../../../contexts/EmployeeContext";
import EditPopUp from "./EditPopUp";
import DeleteConfirmation from "./DeleteConfirmation";

const TableCell = ({ item }) => {
    const [setData] = useContext(EmployeeContext);
    const [deletePopUp, setDeletePopUp] = useState(false);
    const { deleteEmployee, getAllEmployees, updateEmployeeByManager } =
        useEmployee();
    const [editPopUp, setEditPopUp] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [newData, setNewData] = useState({
        division: item.division,
        salary: item.salary,
    });
    const [mobilePopUp, setMobilePopUp] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const fetchEmployeeData = async () => {
        try {
            const response = await getAllEmployees();
            setData(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleDelete = async () => {
        toast.promise(deleteEmployee(item.id), {
            loading: "Deleting...",
            success: () => {
                fetchEmployeeData();
                setDeletePopUp(false);
                window.location.reload();
                return "Deleted!";
            },
            error: (error) => {
                return error.response.data.error;
            },
        });
    };

    const handleUpdate = async () => {
        toast.promise(
            updateEmployeeByManager(item.id, newData.division, newData.salary),
            {
                loading: "Updating...",
                success: () => {
                    fetchEmployeeData();
                    setEditPopUp(false);
                    window.location.reload();
                    return "Updated!";
                },
                error: (error) => {
                    return error.response.data.error;
                },
            },
        );
    };

    const formatCurrency = (number) => {
        return `Rp${number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
    };

    return (
        <>
            {editPopUp && (
                <EditPopUp
                    editMode={editMode}
                    setEditMode={setEditMode}
                    item={item}
                    setEditPopUp={setEditPopUp}
                    newData={newData}
                    handleChange={handleChange}
                    handleUpdate={handleUpdate}
                />
            )}
            {deletePopUp && (
                <DeleteConfirmation
                    setDeletePopUp={setDeletePopUp}
                    handleDelete={handleDelete}
                    item={item}
                />
            )}
            <tr className="h-20 cursor-default border-b-2 border-gray-400 border-opacity-20 text-white hover:bg-primary-gray">
                <Toaster richColors position="top-center"></Toaster>
                <td className="hidden truncate px-4 md:table-cell">
                    <img
                        src={
                            item.picture_url ||
                            "https://th.bing.com/th/id/OIP.9fnawSVfCzr1fVXew2LOSgHaEJ?rs=1&pid=ImgDetMain"
                        } // Use imgUrl prop
                        alt=""
                        className="aspect-square w-12 rounded-md object-cover"
                    />
                </td>
                <td className="truncate px-4">{item.name}</td>
                <td className="truncate px-4">{item.division}</td>
                <td className="hidden truncate px-4 md:table-cell">
                    {formatCurrency(item.salary)}
                </td>
                <td className="px-4">
                    <div className="relative flex items-center justify-center gap-2 md:static md:justify-start">
                        <button
                            className="hidden rounded-md border-[1px] border-gray-400 border-opacity-20 px-2 py-2 hover:bg-primary-black md:block"
                            onClick={() => setEditPopUp(true)}
                        >
                            <SquarePen size={20} />
                        </button>
                        <button
                            className="hidden rounded-md border-[1px] border-gray-400 border-opacity-20 px-2 py-2 hover:bg-red-950 md:block"
                            onClick={() => setDeletePopUp(true)}
                        >
                            <TrashIcon size={20} />
                        </button>
                        <EllipsisVertical
                            size={20}
                            className="block cursor-pointer md:hidden"
                            onClick={() => setMobilePopUp(!mobilePopUp)}
                        />
                        {mobilePopUp && (
                            <div className="absolute right-[50%] top-[100%] z-[20] flex w-24 flex-col gap-2 rounded-md border-[1px] border-gray-500/50 bg-primary-black p-2 shadow-md md:hidden">
                                <h1
                                    onClick={() => {
                                        setEditPopUp(true);
                                        setMobilePopUp(false);
                                    }}
                                >
                                    Edit
                                </h1>
                                <h1
                                    onClick={() => {
                                        setDeletePopUp(true);
                                        setMobilePopUp(false);
                                    }}
                                >
                                    Delete
                                </h1>
                            </div>
                        )}
                    </div>
                </td>
            </tr>
        </>
    );
};
export default TableCell;

import { useEffect, useState } from "react";
import DashboardElement from "./elements/DashboardElement";
import PersonalInformation from "./elements/MyInfo/PersonalInformation";
import useEmployee from "../hooks/useEmployee";
import { toast, Toaster } from "sonner";
import useAuth from "../hooks/useAuth";
import axios from "axios";

export default function MyInfoPage() {
    const [userData, setUserData] = useState({
        name: "",
        picture_url: "",
        salary: "",
        division: "",
        birth_date: "",
        nik_number: "",
        address: "",
        email: "",
    });
    const { getEmployee, updateEmployee } = useEmployee();
    const [editMode, setEditMode] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = async () => {
        setIsLoading(true);
        const data = await getEmployee();
        setUserData(data.data);
        setIsLoading(false);
    };

    const updateData = async (data) => {
        const formData = new FormData();
        formData.append("image", data.picture_url.split(",")[1]);

        try {
            const response = await axios.post(
                `https://api.imgbb.com/1/upload?key=8b7ca97795e9706435d0cdd4c8c3449b`,
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                },
            );
            const parts = response.data.data.display_url.split("ibb.co");
            data.picture_url = parts[0] + "ibb.co.com" + parts[1];
        } catch (error) {
            console.error("Error uploading image:", error);
        }

        const updatedData = await updateEmployee(
            data.name,
            data.picture_url,
            data.birthDate,
            data.nik_number,
            data.address,
            data.salary,
            data.division,
            data.email,
        );

        return updatedData;
    };

    const handleUpdateDataPromise = async (data) => {
        toast.promise(updateData(data), {
            loading: "Updating data...",
            success: (data) => {
                setEditMode(false);
                setUserData(data.data);
                return "Data updated successfully";
            },
            error: (error) => {
                return error.response.data.error;
            },
        });
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="flex min-h-screen w-full bg-primary-black md:h-auto">
            <Toaster richColors position="top-center" />
            <DashboardElement />
            <div className="ml-0 h-full w-full md:ml-36">
                <div className="flex h-full w-full flex-col gap-4 p-8 md:gap-8">
                    <>
                        <PersonalInformation
                            userData={userData}
                            setUserData={setUserData}
                            updateData={handleUpdateDataPromise}
                            editMode={editMode}
                            setEditMode={setEditMode}
                            isLoading={isLoading}
                        />
                        <ChangePassword />
                    </>
                </div>
            </div>
        </div>
    );
}

const ChangePassword = () => {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const { changePassword, logOut } = useAuth();

    const handleChangePassword = async () => {
        if (newPassword !== confirmPassword) {
            toast.error("Password doesn't match");
            return;
        }

        toast.promise(changePassword(oldPassword, newPassword), {
            loading: "Changing password...",
            success: () => {
                logOut();
                return "Password changed successfully";
            },
            error: (error) => {
                return error.response.data.error;
            },
        });
    };

    return (
        <div className="flex h-full w-full flex-col gap-4 bg-secondary-gray p-4 text-white md:p-8">
            <Toaster richColors position="top-center"></Toaster>
            <div className="grid gap-3 md:w-1/3">
                <h1 className="font-sf text-2xl font-bold tracking-widest text-white">
                    Change Password
                </h1>
                <div className="grid items-center md:grid-cols-[120px_1fr] md:gap-4">
                    <p>Old Password:</p>
                    <input
                        className="rounded-md border-2 border-gray-500 border-opacity-20 bg-primary-black px-2 py-1"
                        type="password"
                        value={oldPassword}
                        onChange={(e) => setOldPassword(e.target.value)}
                    />
                </div>
                <div className="grid items-center md:grid-cols-[120px_1fr] md:gap-4">
                    <p>New Password:</p>
                    <input
                        className="rounded-md border-2 border-gray-500 border-opacity-20 bg-primary-black px-2 py-1"
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                </div>
                <div className="grid items-center md:grid-cols-[120px_1fr] md:gap-4">
                    <p>Confirm New Password:</p>
                    <input
                        className="rounded-md border-2 border-gray-500 border-opacity-20 bg-primary-black px-2 py-1"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
            </div>
            <button
                className="flex h-full w-fit rounded-md border-[1px] border-gray-600/50 bg-primary-black px-5 py-3 hover:bg-secondary-gray"
                onClick={handleChangePassword}
            >
                Submit
            </button>
        </div>
    );
};

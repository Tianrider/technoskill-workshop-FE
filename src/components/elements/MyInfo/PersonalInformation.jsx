import { useState, useEffect } from "react";
import TextMode from "./TextMode";
import EditMode from "./EditMode";

export default function PersonalInformation({
    userData,
    updateData,
    editMode,
    setEditMode,
}) {
    // State for form fields
    const [formData, setFormData] = useState({
        name: userData.name || "",
        picture_url: userData.picture_url || "",
        email: userData.email || "",
        salary: userData.salary || "",
        division: userData.division || "",
        birthDate: userData.birth_date || "",
        nik_number: userData.nik_number || "",
        address: userData.address || "",
    });

    useEffect(() => {
        setFormData({
            name: userData.name || "",
            picture_url: userData.picture_url || "",
            email: userData.email || "",
            salary: userData.salary || "",
            division: userData.division || "",
            birthDate: userData.birth_date || "",
            nik_number: userData.nik_number || "",
            address: userData.address || "",
        });
    }, [userData]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleProfilePictureChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            setFormData((prevData) => ({
                ...prevData,
                picture_url: reader.result,
            }));
        };
        reader.readAsDataURL(file);
    };

    return (
        <div className="mt-20 flex h-auto w-full flex-col gap-6 rounded-md border-2 border-gray-500 border-opacity-10 bg-secondary-gray p-4 py-5 font-sf text-white md:mt-0 md:gap-10 md:p-8">
            <h1 className="text-2xl font-bold tracking-widest md:text-3xl">
                Personal Information
            </h1>
            {editMode ? (
                <EditMode
                    formData={formData}
                    onInputChange={handleInputChange}
                    onProfilePictureChange={handleProfilePictureChange}
                />
            ) : (
                <TextMode data={formData} />
            )}
            <div className="flex gap-8">
                {editMode && (
                    <button
                        className="w-24 rounded-md border-[1px] border-gray-600 border-opacity-60 bg-primary-black py-3 text-center"
                        onClick={() => updateData(formData)}
                    >
                        Save
                    </button>
                )}
                <button
                    className="w-24 rounded-md border-[1px] border-gray-600 border-opacity-60 bg-primary-gray/50 py-3 text-center"
                    onClick={() => setEditMode(!editMode)}
                >
                    {editMode ? "Cancel" : "Edit"}
                </button>
            </div>
        </div>
    );
}

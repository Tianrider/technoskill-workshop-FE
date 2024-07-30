import { useState } from "react";

export default function PersonalInformation() {
    const [editMode, setEditMode] = useState(false);
    const [userData, setUserData] = useState({
        name: "John Doe",
        profilePicture:
            "https://th.bing.com/th/id/OIP.9fnawSVfCzr1fVXew2LOSgHaEJ?rs=1&pid=ImgDetMain",
        salary: 1000000,
        division: "Engineering",
        birth: "01-01-2000",
        nik: "08211381237180",
        address:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis quam ea voluptate ipsa quod? Rem nostrum aut, ipsum tenetur culpa, quibusdam delectus minus voluptatibus eius dicta commodi ducimus praesentium impedit.",
    });

    const TextMode = () => {
        return (
            <div className="grid gap-4 text-lg">
                <div className="grid grid-cols-[120px_1fr] items-center gap-4">
                    <p>Name:</p>
                    <p>{userData.name}</p>
                </div>
                <div className="grid grid-cols-[120px_1fr] items-center gap-4">
                    <p>Profile Picture:</p>
                    <div className="flex items-center gap-4">
                        <img
                            src={userData.profilePicture}
                            alt="Profile picture"
                            className="aspect-square w-24 rounded-full object-cover"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-[120px_1fr] items-center gap-4">
                    <p>Salary:</p>
                    <p>{userData.salary}</p>
                </div>
                <div className="grid grid-cols-[120px_1fr] items-center gap-4">
                    <p>Division:</p>
                    <p>{userData.division}</p>
                </div>
                <div className="grid grid-cols-[120px_1fr] items-center gap-4">
                    <p>Birth </p>
                    <p>{userData.birth}</p>
                </div>
                <div className="grid grid-cols-[120px_1fr] items-center gap-4">
                    <p>NIk</p>
                    <p>{userData.nik}</p>
                </div>
                <div className="grid w-full grid-cols-[120px_1fr] items-center gap-4 text-wrap md:w-1/2">
                    <p>Address:</p>
                    <p className="max-h-36 truncate text-wrap">
                        {userData.address}
                    </p>
                </div>
            </div>
        );
    };

    const EditMode = () => {
        return (
            <div className="grid w-full gap-2 text-lg md:w-2/3 md:gap-4">
                <div className="grid items-center md:grid-cols-[120px_1fr] md:gap-4">
                    <p>Name:</p>
                    <input
                        className="w-full rounded-md border-2 border-gray-500 border-opacity-20 bg-primary-black px-2 py-1"
                        type="text"
                        value={userData.name}
                        onChange={(e) =>
                            setUserData({ ...userData, name: e.target.value })
                        }
                    />
                </div>
                <div className="grid w-full items-center md:grid-cols-[120px_1fr] md:gap-4">
                    <p>Profile Picture:</p>
                    <div className="flex h-full w-full items-center gap-4 md:flex-row md:items-center">
                        <img
                            src={userData.profilePicture}
                            alt="Profile picture"
                            className="aspect-square w-24 rounded-full object-cover"
                        />
                        <div className="relative flex h-12 w-24 items-center justify-center rounded-md border-[1px] border-gray-700/50 bg-primary-black hover:bg-primary-gray">
                            <input
                                className="absolute left-0 top-0 h-full w-full appearance-none opacity-0"
                                type="file"
                                accept="image/*"
                                onChange={(e) => {
                                    const reader = new FileReader();
                                    reader.onload = () => {
                                        setUserData({
                                            ...userData,
                                            profilePicture: reader.result,
                                        });
                                    };
                                    reader.readAsDataURL(e.target.files[0]);
                                }}
                            />
                            Change
                        </div>
                    </div>
                </div>
                <div className="grid items-center md:grid-cols-[120px_1fr] md:gap-4">
                    <p>Salary:</p>
                    <input
                        className="rounded-md border-2 border-gray-500 border-opacity-20 bg-primary-black px-2 py-1"
                        type="number"
                        value={userData.salary}
                        onChange={(e) =>
                            setUserData({ ...userData, salary: e.target.value })
                        }
                    />
                </div>
                <div className="grid items-center md:grid-cols-[120px_1fr] md:gap-4">
                    <p>Division:</p>
                    <input
                        className="rounded-md border-2 border-gray-500 border-opacity-20 bg-primary-black px-2 py-1"
                        type="text"
                        value={userData.division}
                        onChange={(e) =>
                            setUserData({
                                ...userData,
                                division: e.target.value,
                            })
                        }
                    />
                </div>
                <div className="grid items-center md:grid-cols-[120px_1fr] md:gap-4">
                    <p>Birth </p>
                    <input
                        className="rounded-md border-2 border-gray-500 border-opacity-20 bg-primary-black px-2 py-1"
                        type="date"
                        value={userData.birth}
                        onChange={(e) =>
                            setUserData({ ...userData, birth: e.target.value })
                        }
                    />
                </div>
                <div className="grid items-center md:grid-cols-[120px_1fr] md:gap-4">
                    <p>NIk</p>
                    <input
                        className="rounded-md border-2 border-gray-500 border-opacity-20 bg-primary-black px-2 py-1"
                        type="text"
                        value={userData.nik}
                        onChange={(e) =>
                            setUserData({ ...userData, nik: e.target.value })
                        }
                    />
                </div>
                <div className="grid items-center md:grid-cols-[120px_1fr] md:gap-4">
                    <p>Address:</p>
                    <textarea
                        className="h-24 rounded-md border-2 border-gray-500 border-opacity-20 bg-primary-black px-2 py-1"
                        type="text"
                        value={userData.address}
                        onChange={(e) =>
                            setUserData({
                                ...userData,
                                address: e.target.value,
                            })
                        }
                    />
                </div>
            </div>
        );
    };

    return (
        <div className="mt-20 flex h-auto w-full flex-col gap-6 rounded-md border-2 border-gray-500 border-opacity-10 bg-secondary-gray p-4 py-5 font-sf text-white md:mt-0 md:gap-10 md:p-8">
            <h1 className="text-2xl font-bold tracking-widest md:text-3xl">
                Personal Information
            </h1>
            {editMode ? <EditMode /> : <TextMode />}
            {!editMode ? (
                <button
                    className="w-fit rounded-md border-[1px] border-gray-600 border-opacity-60 bg-primary-black px-7 py-3"
                    onClick={() => setEditMode(true)}
                >
                    Edit
                </button>
            ) : (
                <button
                    className="w-fit rounded-md border-[1px] border-gray-600 border-opacity-60 bg-primary-black px-7 py-3"
                    onClick={() => setEditMode(false)}
                >
                    Save
                </button>
            )}
        </div>
    );
}

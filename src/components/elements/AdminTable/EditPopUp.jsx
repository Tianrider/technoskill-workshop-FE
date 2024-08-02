import divisionData from "../../../data/divisionData";

export default function EditPopUp({
    editMode,
    setEditMode,
    item,
    setEditPopUp,
    newData,
    handleChange,
    handleUpdate,
}) {
    return (
        <div className="fixed left-0 top-0 z-20 flex h-screen w-full items-center justify-center bg-black/30 p-3 text-white md:p-0">
            <div className="flex h-auto w-full flex-col gap-4 rounded-lg border-[1px] border-gray-500/30 bg-primary-gray p-8 shadow-sm shadow-white/20 md:w-1/2">
                <h1 className="font-sf text-xl font-bold tracking-widest text-white">
                    Employee Information
                </h1>
                {editMode ? (
                    <div className="flex flex-col gap-2">
                        <label htmlFor="division">Division:</label>
                        <select
                            className="h-9 w-1/2 rounded-md border-[1px] border-gray-500/50 bg-primary-gray px-2 py-1"
                            name="division"
                            id="division"
                            value={newData.division}
                            onChange={handleChange}
                        >
                            <option value="" selected disabled>
                                Select Division
                            </option>
                            {divisionData.map((division, index) => (
                                <option key={index} value={division}>
                                    {division}
                                </option>
                            ))}
                        </select>
                        {/* <input
                            type="text"
                            value={newData.division}
                            onChange={handleChange}
                            name="division"
                            className="w-1/2 rounded-md border-[1px] border-gray-500/50 bg-primary-gray px-2 py-1"
                        /> */}
                        <label htmlFor="salary">Salary:</label>
                        <input
                            type="number"
                            value={newData.salary}
                            onChange={handleChange}
                            name="salary"
                            className="w-1/2 rounded-md border-[1px] border-gray-500/50 bg-primary-gray px-2 py-1"
                        />
                    </div>
                ) : (
                    <div className="grid gap-4 text-lg">
                        <div className="grid grid-cols-[120px_1fr] items-center gap-4">
                            <p>Name:</p>
                            <p>{item.name || "empty"}</p>
                        </div>
                        <div className="grid grid-cols-[120px_1fr] items-center gap-4">
                            <p>Profile Picture:</p>
                            <div className="flex items-center gap-4">
                                <img
                                    src={
                                        item.picture_url ||
                                        "https://th.bing.com/th/id/OIP.9fnawSVfCzr1fVXew2LOSgHaEJ?rs=1&pid=ImgDetMain"
                                    }
                                    alt="Profile picture"
                                    className="aspect-square w-24 rounded-full object-cover"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-[120px_1fr] items-center gap-4">
                            <p>Salary:</p>
                            <p>{item.salary || "empty"}</p>
                        </div>
                        <div className="grid grid-cols-[120px_1fr] items-center gap-4">
                            <p>Division:</p>
                            <p>{item.division || "empty"}</p>
                        </div>
                        <div className="grid grid-cols-[120px_1fr] items-center gap-4">
                            <p>Birth </p>
                            <p>
                                {new Date(item.birth_date).toLocaleDateString(
                                    "id-ID",
                                    {
                                        dateStyle: "full",
                                    },
                                ) || "empty"}
                            </p>
                        </div>
                        <div className="grid grid-cols-[120px_1fr] items-center gap-4">
                            <p>NIk</p>
                            <p>{item.nik_number || "empty"}</p>
                        </div>
                        <div className="grid w-full grid-cols-[120px_1fr] items-center gap-4 text-wrap md:w-1/2">
                            <p>Address:</p>
                            <p className="max-h-36 truncate text-wrap">
                                {item.address || "empty"}
                            </p>
                        </div>
                    </div>
                )}
                <div className="flex w-full justify-between">
                    <button
                        className="rounded-lg border-[1px] border-gray-500/50 bg-secondary-gray px-6 py-2 shadow-xl hover:bg-secondary-gray/50"
                        {...(editMode
                            ? { onClick: handleUpdate }
                            : { onClick: () => setEditMode(true) })}
                    >
                        {editMode ? "Save" : "Edit"}
                    </button>
                    <button
                        className="rounded-lg border-[1px] border-gray-500/50 bg-secondary-gray px-6 py-2 shadow-xl hover:bg-secondary-gray/50"
                        onClick={() => setEditPopUp(false)}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}

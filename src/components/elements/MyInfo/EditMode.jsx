const formatDateForInput = (isoDateString) => {
    // Create a Date object from the ISO string
    const date = new Date(isoDateString);

    // Extract and format the date as YYYY-MM-DD
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
};

const EditMode = ({ formData, onInputChange, onProfilePictureChange }) => (
    <div className="grid w-full gap-2 text-lg md:w-2/3 md:gap-4">
        <div className="grid items-center md:grid-cols-[120px_1fr] md:gap-4">
            <p>Name:</p>
            <input
                className="w-full rounded-md border-2 border-gray-500 border-opacity-20 bg-primary-black px-2 py-1"
                type="text"
                name="name"
                value={formData.name}
                onChange={onInputChange}
            />
        </div>
        <div className="grid w-full items-center md:grid-cols-[120px_1fr] md:gap-4">
            <p>Profile Picture:</p>
            <div className="flex h-full w-full items-center gap-4 md:flex-row md:items-center">
                <img
                    src={
                        formData.picture_url ||
                        "https://th.bing.com/th/id/OIP.9fnawSVfCzr1fVXew2LOSgHaEJ?rs=1&pid=ImgDetMain"
                    }
                    alt="Profile picture"
                    className="aspect-square w-24 rounded-full object-cover"
                />
                <div className="relative flex h-12 w-24 items-center justify-center rounded-md border-[1px] border-gray-700/50 bg-primary-black hover:bg-primary-gray">
                    <input
                        className="absolute left-0 top-0 h-full w-full appearance-none opacity-0"
                        type="file"
                        accept="image/*"
                        onChange={onProfilePictureChange}
                    />
                    Change
                </div>
            </div>
        </div>
        <div className="grid items-center md:grid-cols-[120px_1fr] md:gap-4">
            <p>Email:</p>
            <input
                className="w-full rounded-md border-2 border-gray-500 border-opacity-20 bg-primary-black px-2 py-1"
                type="text"
                name="email"
                value={formData.email}
                onChange={onInputChange}
            />
        </div>
        <div className="grid items-center md:grid-cols-[120px_1fr] md:gap-4">
            <p>Salary:</p>
            <input
                className="cursor-not-allowed rounded-md border-2 border-gray-500 border-opacity-20 bg-primary-black/20 px-2 py-1"
                type="number"
                name="salary"
                value={formData.salary}
                disabled
            />
        </div>
        <div className="grid items-center md:grid-cols-[120px_1fr] md:gap-4">
            <p>Division:</p>
            <input
                className="cursor-not-allowed rounded-md border-2 border-gray-500 border-opacity-20 bg-primary-black/20 px-2 py-1"
                type="text"
                name="division"
                value={formData.division}
                disabled
            />
        </div>
        <div className="grid items-center md:grid-cols-[120px_1fr] md:gap-4">
            <p>Birth </p>
            <input
                className="rounded-md border-2 border-gray-500 border-opacity-20 bg-primary-black px-2 py-1"
                type="date"
                name="birthDate"
                value={formatDateForInput(formData.birthDate)}
                onChange={onInputChange}
            />
        </div>
        <div className="grid items-center md:grid-cols-[120px_1fr] md:gap-4">
            <p>NIk</p>
            <input
                className="rounded-md border-2 border-gray-500 border-opacity-20 bg-primary-black px-2 py-1"
                type="text"
                name="nik_number"
                value={formData.nik_number}
                onChange={onInputChange}
            />
        </div>
        <div className="grid items-center md:grid-cols-[120px_1fr] md:gap-4">
            <p>Address:</p>
            <textarea
                className="h-24 rounded-md border-2 border-gray-500 border-opacity-20 bg-primary-black px-2 py-1"
                name="address"
                value={formData.address}
                onChange={onInputChange}
            />
        </div>
    </div>
);

export default EditMode;

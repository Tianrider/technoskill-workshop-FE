const TextMode = ({ data }) => (
    <div className="grid w-full gap-4 overflow-auto text-lg">
        <div className="grid grid-cols-[120px_1fr] items-center gap-4">
            <p>Name:</p>
            <p>{data.name}</p>
        </div>
        <div className="grid grid-cols-[120px_1fr] items-center gap-4">
            <p>Profile Picture:</p>
            <div className="flex items-center gap-4">
                <img
                    src={
                        data.picture_url ||
                        "https://th.bing.com/th/id/OIP.9fnawSVfCzr1fVXew2LOSgHaEJ?rs=1&pid=ImgDetMain"
                    }
                    alt="Profile picture"
                    className="aspect-square w-24 rounded-full object-cover"
                />
            </div>
        </div>
        <div className="grid grid-cols-[120px_1fr] items-center gap-4">
            <p>Email</p>
            <p>{data.email || "empty"}</p>
        </div>
        <div className="grid grid-cols-[120px_1fr] items-center gap-4">
            <p>Salary:</p>
            <p>{data.salary || "empty"}</p>
        </div>
        <div className="grid grid-cols-[120px_1fr] items-center gap-4">
            <p>Division:</p>
            <p>
                {data.division || <span className="text-white/50">Empty</span>}
            </p>
        </div>
        <div className="grid grid-cols-[120px_1fr] items-center gap-4">
            <p>Birth </p>
            <p>
                {new Date(data.birthDate).toLocaleDateString("id-ID", {
                    dateStyle: "full",
                }) || <span className="text-white/50">Empty</span>}
            </p>
        </div>
        <div className="grid grid-cols-[120px_1fr] items-center gap-4">
            <p>NIk</p>
            <p>
                {data.nik_number || (
                    <span className="text-white/50">Empty</span>
                )}
            </p>
        </div>
        <div className="grid w-full grid-cols-[120px_1fr] items-center gap-4 text-wrap md:w-1/2">
            <p>Address:</p>
            <p className="max-h-36 truncate text-wrap">
                {data.address || <span className="text-white/50">Empty</span>}
            </p>
        </div>
    </div>
);

export default TextMode;

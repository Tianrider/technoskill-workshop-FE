export default function DeleteConfirmation({
    setDeletePopUp,
    handleDelete,
    item,
}) {
    return (
        <div className="fixed left-0 top-0 z-20 flex h-screen w-full items-center justify-center bg-black/10">
            <div className="text-md flex h-auto w-auto max-w-[95vw] flex-col gap-8 truncate rounded-md border-[1px] border-gray-500/20 bg-primary-gray p-6 font-sf text-white/80 shadow-sm shadow-gray-700 md:max-w-[50vw] md:text-lg">
                <h1>
                    Delete{" "}
                    <span className="font-bold tracking-widest text-white">
                        {item.name}
                    </span>{" "}
                    <br></br>
                    from your employee?{" "}
                    <span className="text-sm opacity-70">
                        (this action cannot be undone)
                    </span>
                </h1>
                <div className="flex w-full justify-between">
                    <button
                        className="rounded-lg bg-gray-500 px-5 py-2 shadow-xl hover:bg-gray-400"
                        onClick={() => setDeletePopUp(false)}
                    >
                        Cancel
                    </button>
                    <button
                        className="rounded-lg bg-red-500 px-5 py-2 shadow-xl hover:bg-red-400"
                        onClick={handleDelete}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}

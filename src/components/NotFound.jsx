import { useNavigate } from "react-router-dom";

function NotFound() {
    const navigate = useNavigate();
    return (
        <div className="flex h-screen w-full flex-col items-center justify-between overflow-clip bg-primary-black py-[20vh] text-white">
            <img
                src="https://seranking.com/blog/wp-content/uploads/2021/01/404_01-min.jpg"
                className="animate-spin-slow w-full rounded-md md:w-1/4"
                alt=""
            />
            <h1 className="">
                Comeback{" "}
                <span
                    onClick={() => navigate("/")}
                    className="cursor-pointer underline"
                >
                    here
                </span>
            </h1>
        </div>
    );
}

export default NotFound;

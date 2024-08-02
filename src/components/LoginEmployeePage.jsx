import { useEffect, useState } from "react";
import Logo from "../assets/logo.svg";
import "../styles/styles.css";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { toast, Toaster } from "sonner";
import Cookies from "js-cookie";

function InputForm({ label, type, value, setValue }) {
    return (
        <div className="mb-6">
            <label htmlFor={label.toLowerCase()} className="mt-6 block text-lg">
                {label}
            </label>
            <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                type={type}
                id={label.toLowerCase()}
                className="mt-1 h-[39px] w-full shrink-0 rounded-md border border-solid border-gray-500 pl-2 text-primary-black"
                placeholder={label}
            />
        </div>
    );
}

function LoginEmployeePage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { employeeLogin, verifyToken } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        toast.promise(employeeLogin(email, password), {
            loading: "Logging in...",
            success: (data) => {
                if (data) {
                    navigate("/my-info");
                    return "Logged in successfully!";
                }
            },
            error: (error) => {
                console.log(error);
                return error.response.data.error;
            },
        });
    };

    useEffect(() => {
        const token = Cookies.get("token");
        const getAccess = async () => {
            if (token) {
                try {
                    const response = await verifyToken(token);
                    if (
                        response.data.role === "employee" &&
                        response.data.isValid
                    ) {
                        navigate("/my-info");
                    }
                } catch (error) {
                    console.error("Token verification failed:", error);
                }
            }
        };

        getAccess();
    }, []);

    return (
        <div className="flex justify-between gap-5 bg-primary-gray font-sf text-white bg-blend-normal max-md:flex-wrap">
            <Toaster richColors position="top-center" />
            <img
                loading="lazy"
                src={Logo}
                alt=""
                className="m-auto aspect-[0.74] w-[120px] shrink-0 max-md:hidden"
            />
            <section className="flex h-screen w-1/2 items-center justify-center bg-primary-black px-16 py-20 max-md:m-auto max-md:w-screen max-md:px-5">
                <div className="flex w-3/4 flex-col max-md:m-auto max-md:w-full">
                    <img
                        loading="lazy"
                        src={Logo}
                        alt=""
                        className="hidden max-md:m-auto max-md:mb-5 max-md:block max-md:aspect-[0.74] max-md:w-[100px]"
                    />
                    <h1 className="self-center text-2xl font-bold">
                        Welcome back, Employee!
                    </h1>
                    <p className="mt-2.5 self-center text-base">
                        Enter your credentials to access your account
                    </p>
                    <form>
                        <InputForm
                            label="Email"
                            type="text"
                            value={email}
                            setValue={setEmail}
                        />
                        <InputForm
                            label="Password"
                            type="password"
                            value={password}
                            setValue={setPassword}
                        />
                        <button
                            className="buttonhover mt-3 w-full rounded px-16 py-2.5 text-base max-md:px-5"
                            onClick={handleSubmit}
                        >
                            Sign in
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default LoginEmployeePage;

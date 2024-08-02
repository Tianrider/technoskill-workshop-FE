import { useState } from "react";
import Logo from "../assets/logo.svg";
import "../styles/styles.css";
import { useNavigate } from "react-router-dom";
import { toast, Toaster } from "sonner";
import useAuth from "../hooks/useAuth";

function RegisterPage() {
    const [name, setName] = useState("");
    const [businessName, setBusinessName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const { registerManager } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }

        toast.promise(registerManager(name, businessName, email, password), {
            loading: "Creating your account...",
            success: () => {
                navigate("/login");
                return "Account Berhasil Dibuat!";
            },
            error: (error) => {
                console.log("error", error);
                return error.response.data.error;
            },
        });
    };

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
                        Create an Account
                    </h1>
                    <p className="mt-2.5 self-center text-base">
                        Make sure to use your real identity!
                    </p>
                    <form>
                        <InputForm
                            label="Your Name"
                            type="text"
                            value={name}
                            setValue={setName}
                        />
                        <InputForm
                            label="Business Name"
                            type="text"
                            value={businessName}
                            setValue={setBusinessName}
                        />
                        <InputForm
                            label="Email"
                            type="email"
                            value={email}
                            setValue={setEmail}
                        />
                        <InputForm
                            label="Password"
                            type="password"
                            value={password}
                            setValue={setPassword}
                        />
                        <InputForm
                            label="Confirm Password"
                            type="password"
                            value={confirmPassword}
                            setValue={setConfirmPassword}
                        />
                        <button
                            className="buttonhover mt-3 w-full rounded px-16 py-2.5 text-base max-md:px-5"
                            onClick={handleSubmit}
                        >
                            Sign Up
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
}

function InputForm({ label, type, value, setValue }) {
    return (
        <div className="mb-4">
            <label htmlFor={label.toLowerCase()} className="mt-2 block text-lg">
                {label}
            </label>
            <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                type={type}
                id={label.toLowerCase()}
                className="bg-w mt-1 h-[39px] w-full shrink-0 rounded-md border border-solid border-gray-500 bg-white bg-opacity-90 pl-2 text-primary-black"
                placeholder={label}
            />
        </div>
    );
}

export default RegisterPage;

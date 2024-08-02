import { useState } from "react";
import DashboardElement from "./elements/DashboardElement";
import { ChevronDown } from "lucide-react";
import useEmployee from "../hooks/useEmployee";
import { toast, Toaster } from "sonner";
import divisionData from "../data/divisionData";

function AddEmployeePage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [division, setDivision] = useState("");
    const [salary, setSalary] = useState("");
    const { addEmployee } = useEmployee();
    const [showPopUp, setShowPopUp] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        toast.promise(addEmployee(name, email, division, salary), {
            loading: "Adding Employee",
            success: (data) => {
                if (data) {
                    setShowPopUp(true);
                    return "Employee Berhasil Ditambahkan!";
                }
            },
            error: (error) => {
                console.log(error);
                return error.response.data.error;
            },
        });
    };

    return (
        <div className="flex h-screen bg-white font-sf bg-blend-normal max-md:flex-wrap">
            <Toaster richColors position="top-center"></Toaster>
            <DashboardElement />
            {showPopUp && (
                <PopUp name={name} email={email} setShowPopUp={setShowPopUp} />
            )}
            <section className="flex w-fit shrink-0 grow basis-0 items-center justify-center bg-primary-black px-16 py-20 max-md:max-w-full max-md:px-5">
                <form className="mx-auto flex w-[510px] max-w-full flex-col rounded-3xl border border-solid border-gray-500 bg-primary-gray px-8 py-9 max-md:mt-10 max-md:px-5">
                    <h2 className="text-3xl font-bold text-white max-md:max-w-full">
                        Add New Employee
                    </h2>
                    <p className="mt-2.5 text-lg text-white max-md:max-w-full max-md:text-sm">
                        Fill out the form to add a new employee to your team.
                    </p>
                    <FormInput
                        label="Name"
                        placeholder="Enter Employee Name"
                        value={name}
                        setValue={setName}
                    />
                    <FormInput
                        label="Email"
                        placeholder="Enter Employee Email"
                        value={email}
                        setValue={setEmail}
                    />
                    <FormSelect
                        label="Division"
                        value={division}
                        setValue={setDivision}
                    />
                    <FormInput
                        label="Salary"
                        type="number"
                        placeholder="Enter Salary"
                        value={salary}
                        setValue={setSalary}
                    />
                    <button
                        className="buttonhover mt-10 self-end rounded bg-white px-5 py-3 text-center text-lg text-primary-black max-md:px-5"
                        onClick={handleSubmit}
                    >
                        Add Employee
                    </button>
                </form>
            </section>
        </div>
    );
}

function PopUp({ name, email, setShowPopUp }) {
    return (
        <div className="fixed left-0 top-0 z-20 flex h-screen w-screen items-center justify-center bg-black bg-opacity-80">
            <div className="shadow-white-50 md:max-w-1/2 flex w-auto max-w-[90%] flex-col gap-3 rounded-xl border-[1px] border-gray-500/50 bg-secondary-gray p-5 text-white shadow-sm">
                <h1 className="text-2xl font-bold">Employee Added!</h1>
                <p className="text-lg tracking-widest">
                    Berikan Data ini Kepada {name} Untuk Melakukan Log In:{" "}
                    <br></br>
                </p>{" "}
                <p className="font-mono text-xl font-bold text-primary-orange">
                    email: {email} <br></br>
                    password: {email}
                </p>
                <button
                    className="mt-5 self-end rounded-md border-[1px] border-gray-500/50 bg-primary-black px-5 py-3 text-center text-lg text-white hover:bg-primary-black/30"
                    onClick={() => setShowPopUp(false)}
                >
                    Close
                </button>
            </div>
        </div>
    );
}

function FormSelect({ label, value, setValue }) {
    return (
        <div className="mt-4 max-md:max-w-full">
            <label className="text-lg text-white max-md:text-sm">{label}</label>
            <div className="relative mt-1 flex h-[49px] w-full items-center justify-between rounded-md border border-solid border-gray-500 bg-primary-black text-white max-md:text-sm">
                <select
                    className="h-full w-full appearance-none rounded-md bg-primary-black px-2 text-white focus:border-white"
                    name="division"
                    id="division"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
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
                <ChevronDown
                    size={24}
                    className="absolute right-0 mr-1 text-gray-500"
                />
            </div>
        </div>
    );
}

function FormInput({ label, type, placeholder, value, setValue }) {
    return (
        <div className="mt-4 max-md:max-w-full">
            <label className="text-lg text-white max-md:text-sm">{label}</label>
            <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                type={type}
                className="mt-1 h-[49px] w-full shrink-0 rounded-md border border-solid border-gray-500 bg-primary-black px-2 py-4 text-white"
                placeholder={placeholder}
            />
        </div>
    );
}

export default AddEmployeePage;

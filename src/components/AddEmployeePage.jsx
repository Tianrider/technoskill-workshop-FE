import DashboardElement from "./elements/DashboardElement";
import { ChevronDown } from "lucide-react";

function FormSelect({ label }) {
    return (
        <div className="mt-8 max-md:max-w-full">
            <label className="text-lg text-white max-md:text-sm">{label}</label>
            <div className="relative mt-1 flex h-[49px] w-full items-center justify-between rounded-md border border-solid border-gray-500 bg-primary-black text-white max-md:text-sm">
                <select
                    className="relative h-full w-full appearance-none rounded-md bg-primary-black px-2 text-white focus:border-white"
                    name="division"
                    id="division"
                >
                    <option value="" selected disabled>
                        Select Division
                    </option>
                    <option value="">Engineering</option>
                    <option value="">Marketing</option>
                    <option value="">Sales</option>
                </select>
                <ChevronDown
                    size={24}
                    className="absolute right-0 mr-1 text-gray-500"
                />
            </div>
        </div>
    );
}

function FormInput({ label, type, placeholder }) {
    return (
        <div className="mt-8 max-md:max-w-full">
            <label className="text-lg text-white max-md:text-sm">{label}</label>
            <input
                type={type}
                className="mt-1 h-[49px] w-full shrink-0 rounded-md border border-solid border-gray-500 bg-primary-black px-2 py-4 text-white"
                placeholder={placeholder}
            />
        </div>
    );
}

function AddEmployeePage() {
    return (
        <div className="flex h-screen bg-white font-sf bg-blend-normal max-md:flex-wrap">
            <DashboardElement />
            <section className="flex w-fit shrink-0 grow basis-0 items-center justify-center bg-primary-black px-16 py-20 max-md:max-w-full max-md:px-5">
                <form className="mx-auto flex w-[510px] max-w-full flex-col rounded-3xl border border-solid border-gray-500 bg-primary-gray px-8 py-9 max-md:mt-10 max-md:px-5">
                    <h2 className="text-3xl font-bold text-white max-md:max-w-full">
                        Add New Employee
                    </h2>
                    <p className="mt-2.5 text-lg text-white max-md:max-w-full max-md:text-sm">
                        Fill out the form to add a new employee to your team.
                    </p>
                    <FormInput label="Name" placeholder="Enter Employee Name" />
                    <FormSelect label="Division" />
                    <FormInput
                        label="Salary"
                        type="number"
                        placeholder="Enter Salary"
                    />
                    <button className="buttonhover mt-10 self-end rounded bg-white px-5 py-3 text-center text-lg text-primary-black max-md:px-5">
                        Add Employee
                    </button>
                </form>
            </section>
        </div>
    );
}

export default AddEmployeePage;

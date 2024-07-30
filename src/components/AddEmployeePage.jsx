import DashboardElement from "./elements/DashboardElement";
import { ChevronDown } from 'lucide-react';

function FormSelect ({ label }) {
  return (
    <div className="mt-8 max-md:max-w-full">
      <label className="text-lg text-white max-md:text-sm">{label}</label>
      <div className="relative w-full h-[49px] flex justify-between items-center mt-1 rounded-md border border-gray-500 border-solid bg-primary-black text-white max-md:text-sm">
        <select className="rounded-md w-full h-full px-2 bg-primary-black text-white focus:border-white appearance-none relative" name="division" id="division">
          <option value="" selected disabled>Select Division</option>
          <option value="" >Engineering</option>
          <option value="" >Marketing</option>
          <option value="" >Sales</option>
        </select>
        <ChevronDown size={24} className="text-gray-500 absolute right-0 mr-1" />
      </div>
    </div>
  );
}

function FormInput ({ label, type, placeholder}) {
  return (
    <div className="mt-8 max-md:max-w-full">
      <label className="text-lg text-white max-md:text-sm">{label}</label>
      <input
        type={type}
        className="shrink-0 px-2 mt-1 py-4 rounded-md border border-gray-500 border-solid bg-primary-black h-[49px] w-full text-white"
        placeholder={placeholder}
      />
    </div>
  );
}

function AddEmployeePage () {
  return (
    <div className="font-sf h-screen flex bg-white bg-blend-normal max-md:flex-wrap">
      <DashboardElement />
      <section className="flex grow shrink-0 justify-center items-center px-16 py-20 basis-0 bg-primary-black w-fit max-md:px-5 max-md:max-w-full">
        <form className="flex flex-col px-8 py-9 mx-auto max-w-full rounded-3xl border border-gray-500 border-solid bg-primary-gray w-[510px] max-md:px-5 max-md:mt-10">
          <h2 className="text-3xl font-bold text-white max-md:max-w-full">Add New Employee</h2>
          <p className="mt-2.5 text-lg text-white max-md:max-w-full max-md:text-sm">
            Fill out the form to add a new employee to your team.
          </p>
          <FormInput label="Name" placeholder="Enter Employee Name" />
          <FormSelect label="Division" />
          <FormInput label="Salary" type="number" placeholder="Enter Salary" />
          <button className="buttonhover self-end px-5 py-3 mt-10 text-lg text-center bg-white rounded text-primary-black max-md:px-5">
            Add Employee
          </button>
        </form>
      </section>
    </div>
  );
}

export default AddEmployeePage;
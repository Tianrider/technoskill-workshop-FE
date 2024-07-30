import { useState } from "react";
import DashboardElement from "./elements/DashboardElement";
import axios from "axios";

export default function AddEmployeePage() {
  const [name, setName] = useState("");
  const [division, setDivision] = useState("");
  const [salary, setSalary] = useState("");

  const handleAddEmployee = async () => {
    try {
      const response = await axios.post("http://localhost:8000/employee/add", {
        name,
        division,
        salary,
      });

      if (response.status !== 201) throw new Error("Add employee failed");

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex h-screen w-screen bg-[#CED1DA]">
      <DashboardElement />

      <div className="m-auto flex h-[675px] w-[622px] flex-col rounded-2xl bg-[#2B2E63] text-white">
        <p className="mx-auto mt-20 text-[30px]">Add New Employee</p>

        <div className="mx-auto mt-10">
          <p className="text-[20px]">Name</p>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="h-[41px] w-[343px] bg-[#BFCBCE] px-2 text-gray-700"
          />
        </div>

        <div className="mx-auto mt-10">
          <p className="text-[20px]">Division</p>
          <input
            value={division}
            onChange={(e) => setDivision(e.target.value)}
            className="h-[41px] w-[343px] bg-[#BFCBCE] px-2 text-gray-700"
          />
        </div>

        <div className="mx-auto mt-10">
          <p className="text-[20px]">Salary</p>
          <input
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            className="h-[41px] w-[343px] bg-[#BFCBCE] px-2 text-gray-700"
          />
        </div>

        <div className="mx-auto mt-20">
          <button
            className="rounded-2xl bg-[#6F90AF] p-2 px-3"
            onClick={handleAddEmployee}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

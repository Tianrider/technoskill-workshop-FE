import React from "react";
import TableCell from "./TableCell";

const data = [
  { name: "John Doe", division: "IT", salary: 1000 },
  { name: "Jane Doe", division: "HR", salary: 2000 },
  { name: "John Smith", division: "IT", salary: 3000 },
  { name: "Emily Johnson", division: "Finance", salary: 2500 },
  { name: "John Doe", division: "IT", salary: 1000 },
  { name: "Jane Doe", division: "HR", salary: 2000 },
  { name: "John Smith", division: "IT", salary: 3000 },
  { name: "Emily Johnson", division: "Finance", salary: 2500 },
  { name: "John Doe", division: "IT", salary: 1000 },
  { name: "Jane Doe", division: "HR", salary: 2000 },
  { name: "John Smith", division: "IT", salary: 3000 },
  { name: "Emily Johnson", division: "Finance", salary: 2500 },
];

export default function DashboardTable() {
  return (
    <div className="h-full w-full flex-1 overflow-y-auto rounded-md border-2 border-gray-500 border-opacity-10 bg-secondary-gray px-4 py-2">
      <div className="table-scrollbar h-full w-full overflow-auto">
        <table className="w-full table-fixed">
          <thead className="sticky top-0 cursor-default border-b-2 border-gray-400 border-opacity-20 bg-secondary-gray text-left text-white text-opacity-50">
            <tr>
              <th className="hidden w-[6%] px-4 py-2 pb-3 md:table-cell">
                Image
              </th>
              <th className="w-[34%] px-4 py-2 pb-3">Name</th>
              <th className="w-[25%] px-4 py-2 pb-3">Division</th>
              <th className="hidden w-[25%] px-4 py-2 pb-3 md:table-cell">
                Salary
              </th>
              <th className="w-[20%] px-4 py-2 pb-3 md:w-[10%]">Actions</th>
            </tr>
          </thead>
          <tbody className="w-full">
            {data.map((item, index) => (
              <TableCell
                key={index}
                imgUrl={null}
                name={item.name}
                division={item.division}
                salary={item.salary}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

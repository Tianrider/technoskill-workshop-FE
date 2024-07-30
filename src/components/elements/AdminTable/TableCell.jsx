import { EllipsisVertical, SquarePen, TrashIcon } from "lucide-react";

const TableCell = ({ imgUrl, name, division, salary }) => (
  <tr className="h-20 cursor-default border-b-2 border-gray-400 border-opacity-20 text-white hover:bg-primary-gray">
    <td className="hidden truncate px-4 md:table-cell">
      <img
        src={
          imgUrl ||
          "https://th.bing.com/th/id/OIP.9fnawSVfCzr1fVXew2LOSgHaEJ?rs=1&pid=ImgDetMain"
        } // Use imgUrl prop
        alt=""
        className="aspect-square w-12 rounded-md object-cover"
      />
    </td>
    <td className="truncate px-4">{name}</td>
    <td className="truncate px-4">{division}</td>
    <td className="hidden truncate px-4 md:table-cell">{salary}</td>
    <td className="truncate px-4">
      <div className="flex items-center justify-center gap-2 md:justify-start">
        <button className="hidden rounded-md border-[1px] border-gray-400 border-opacity-20 px-2 py-2 hover:bg-primary-black md:block">
          <SquarePen size={20} />
        </button>
        <button className="hidden rounded-md border-[1px] border-gray-400 border-opacity-20 px-2 py-2 hover:bg-red-950 md:block">
          <TrashIcon size={20} />
        </button>
        <EllipsisVertical
          size={20}
          className="block cursor-pointer md:hidden"
        />
      </div>
    </td>
  </tr>
);

export default TableCell;

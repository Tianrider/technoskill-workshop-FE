import { LogOut, icons } from "lucide-react";
import logo from "../../assets/logo.svg";
import { useLocation, useNavigate } from "react-router-dom";

const Icons = ({ name, hrefUri }) => {
  const LuicideIcon = icons[name];
  const navigate = useNavigate();
  const location = useLocation();

  const isSelected = location.pathname === hrefUri;

  return (
    <LuicideIcon
      size={32}
      className={`cursor-pointer ${
        isSelected ? "text-primary-orange" : "text-white"
      }`}
      onClick={() => navigate(hrefUri)}
    />
  );
};

const IconData = [
  { name: "CircleUser", hrefUri: "/my-info" },
  { name: "LayoutDashboard", hrefUri: "/home" },
  { name: "UserPlus", hrefUri: "/add-employee" },
];

export default function DashboardElement() {
  return (
    <div className="flex h-20 flex-col items-center justify-between border-r-2 border-gray-600 border-opacity-20 bg-primary-gray py-4 pb-10 md:h-full md:w-1/12">
      <div className="flex w-full flex-col items-center gap-16">
        <img src={logo} alt="" className="aspect-auto w-20" />
        <div className="flex flex-col items-center justify-center gap-16">
          {IconData.map((data, index) => (
            <Icons key={index} name={data.name} hrefUri={data.hrefUri} />
          ))}
        </div>
      </div>
      <LogOut size={32} className="cursor-pointer text-white" />
    </div>
  );
}

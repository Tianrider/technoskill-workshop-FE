import { LogOut, MenuIcon, icons } from "lucide-react";
import logo from "../../assets/logo.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

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
    { name: "CircleUser", hrefUri: "/my-info", title: "My Info" },
    { name: "LayoutDashboard", hrefUri: "/home", title: "Home" },
    { name: "UserPlus", hrefUri: "/add-employee", title: "Add Employee" },
];

export default function DashboardElement() {
    const [showPop, setShowPop] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div className="fixed top-0 flex w-full items-center justify-between border-r-2 border-gray-600 border-opacity-20 bg-primary-gray md:fixed md:h-full md:w-36 md:flex-col md:py-8 md:pb-10">
            <div className="hidden w-full flex-col items-center gap-16 md:flex">
                <img src={logo} alt="" className="aspect-auto w-20" />
                <div className="flex flex-col items-center justify-center gap-16">
                    {IconData.map((data, index) => (
                        <Icons
                            key={index}
                            name={data.name}
                            hrefUri={data.hrefUri}
                        />
                    ))}
                </div>
            </div>
            <LogOut
                size={32}
                className="hidden cursor-pointer text-white md:block"
            />
            <div className="relative flex h-20 w-full items-center justify-between px-4 md:hidden">
                <MenuIcon
                    size={32}
                    className="cursor-pointer text-white"
                    onClick={() => setShowPop(!showPop)}
                />
                <img src={logo} alt="" className="aspect-auto w-12" />
                {showPop && (
                    <div className="absolute left-0 top-[100%] flex h-auto w-screen flex-col items-center gap-2 bg-primary-gray px-4 pb-10 font-sf">
                        {IconData.map((data, index) => (
                            <p
                                key={index}
                                className={
                                    location.pathname === data.hrefUri
                                        ? "tracking-widest text-primary-orange"
                                        : "text-white"
                                }
                                onClick={() => navigate(data.hrefUri)}
                            >
                                {data.title}
                            </p>
                        ))}
                        <p className="text-white">LogOut</p>
                    </div>
                )}
            </div>
        </div>
    );
}

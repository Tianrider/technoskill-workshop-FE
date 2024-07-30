import DashboardElement from "./elements/DashboardElement";
import DashboardTable from "./elements/AdminTable/DashboardTable";

export default function HomePage() {
    return (
        <div className="h-screen w-full bg-primary-black">
            <DashboardElement />
            <div className="h-full w-full md:pl-36">
                <div className="flex h-full w-full flex-col items-center justify-center gap-8 p-8 font-sf">
                    <div className="hidden w-full text-5xl font-bold text-white md:block">
                        DashBoard
                    </div>
                    <div className="mt-20 flex h-1/5 w-full gap-8 md:mt-0">
                        <div className="h-full w-1/2 rounded-md border-2 border-gray-500 border-opacity-10 bg-secondary-gray"></div>
                        <div className="h-full flex-1 rounded-md border-2 border-gray-500 border-opacity-10 bg-secondary-gray"></div>
                    </div>
                    <DashboardTable />
                </div>
            </div>
        </div>
    );
}

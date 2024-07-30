import DashboardElement from "./elements/DashboardElement";
import PersonalInformation from "./elements/MyInfo/PersonalInformation";

export default function MyInfoPage() {
    return (
        <div className="flex min-h-screen w-full bg-primary-black md:h-auto">
            <DashboardElement />
            <div className="ml-36 h-full w-full">
                <div className="flex h-full w-full flex-col gap-4 p-8 md:gap-8">
                    <PersonalInformation />
                    <ChangePassword />
                </div>
            </div>
        </div>
    );
}

const ChangePassword = () => {
    return (
        <div className="gap-4w-full flex h-full flex-col gap-2 bg-secondary-gray p-4 text-white md:p-8">
            <div className="grid gap-3 md:w-1/3">
                <h1 className="font-sf text-2xl font-bold tracking-widest text-white">
                    Change Password
                </h1>
                <div className="grid items-center md:grid-cols-[120px_1fr] md:gap-4">
                    <p>Old Password:</p>
                    <input
                        className="rounded-md border-2 border-gray-500 border-opacity-20 bg-primary-black px-2 py-1"
                        type="password"
                    />
                </div>
                <div className="grid items-center md:grid-cols-[120px_1fr] md:gap-4">
                    <p>New Password:</p>
                    <input
                        className="rounded-md border-2 border-gray-500 border-opacity-20 bg-primary-black px-2 py-1"
                        type="password"
                    />
                </div>
                <div className="grid items-center md:grid-cols-[120px_1fr] md:gap-4">
                    <p>Confirm New Password:</p>
                    <input
                        className="rounded-md border-2 border-gray-500 border-opacity-20 bg-primary-black px-2 py-1"
                        type="password"
                    />
                </div>
            </div>
            <button className="flex h-full w-fit rounded-md border-[1px] border-gray-600/50 bg-primary-black px-5 py-3 hover:bg-secondary-gray">
                Submit
            </button>
        </div>
    );
};

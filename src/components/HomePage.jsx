import DashboardElement from "./elements/DashboardElement";

export default function HomePage() {
	return (
		<div className="bg-[#CED1DA] flex h-screen w-full">
			<DashboardElement />
			<div className="w-full h-full bg-primary-black"></div>
		</div>
	);
}

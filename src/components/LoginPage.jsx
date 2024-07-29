import Logo from '../assets/logo_teggnoskyl.png';
import '../styles/styles.css';
import { useNavigate } from "react-router-dom";

function InputForm({ label, type }) {
	return (
		<div className="mb-6">
			<label htmlFor={label.toLowerCase()} className="block mt-6 text-lg">{label}</label>
			<input
			type={type}
			id={label.toLowerCase()}
			className="shrink-0 mt-1 rounded-md border border-gray-400 border-solid h-[39px] w-full text-primary-black pl-2"
			placeholder={label}
			/>
		</div>
	);
}

function LoginPage() {
	const navigate = useNavigate();

	return (
		<div className="font-sf flex gap-5 justify-between text-white bg-blend-normal bg-primary-gray max-md:flex-wrap">
			<img loading="lazy" src={Logo} alt="" className="shrink-0 m-auto aspect-[0.74] w-[62px] max-md:hidden" />
			<section className="flex justify-center items-center px-16 py-20 w-1/2 h-screen bg-primary-black max-md:px-5 max-md:w-screen max-md:m-auto">
				<div className="flex flex-col w-3/4 max-md:mt-10 max-md:m-auto max-md:w-full">
					<img loading="lazy" src={Logo} alt="" className="hidden max-md:block max-md:m-auto max-md:aspect-[0.74] max-md:w-[62px] max-md:mb-10" />
					<h1 className="self-center text-2xl font-bold">Welcome back, Manager!</h1>
					<p className="self-center mt-2.5 text-base">Enter your credentials to access your account</p>
					<form>
						<InputForm label="Email" type="text" />
						<InputForm label="Password" type="password" />
						<button className="buttonhover px-16 py-2.5 mt-3 text-base rounded max-md:px-5 w-full">
							Sign in
						</button>
						<button className="px-16 py-2.5 mt-3 text-base rounded max-md:px-5 w-full border border-gray-400 border-solid" onClick={() => navigate("/loginEmployee")}>
							Sign in as Employee
						</button>
					</form>
					<p className="self-center mt-5 text-lg">
						Don't have an account? <a href="/register" className="text-white underline">Sign Up</a>
					</p>
				</div>
			</section>
		</div>
	);
}

export default LoginPage;
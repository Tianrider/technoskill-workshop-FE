
function InputField({ label, type }) {
	return (
		<div className="mb-6">
			<label htmlFor={label.toLowerCase()} className="block mt-6 text-lg">{label}</label>
			<input
			type={type}
			id={label.toLowerCase()}
			className="shrink-0 mt-2 rounded-md border border-gray-400 border-solid h-[39px] w-full text-primary-black pl-2"
			/>
		</div>
	);
}

function Button({ children, primary, secondary }) {
	const baseClasses = "px-16 py-2.5 mt-3 text-base rounded max-md:px-5 w-full";
	const primaryClasses = "bg-white text-stone-950";
	const secondaryClasses = "border border-gray-400 border-solid";

	return (
		<button 
		className={`${baseClasses} ${primary ? primaryClasses : ''} ${secondary ? secondaryClasses : ''}`}
		>
		{children}
		</button>
	);
}

function LoginPage() {
	return (
		<main className="font-sf flex gap-5 justify-between text-white bg-blend-normal bg-primary-gray max-md:flex-wrap">
			<img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/cd9e16b921abf8c15e074dd781c451f6559766e71e43c19f1fd07d90a941d926?apiKey=4672beb70c1f4f87acdddfc46df80afc&&apiKey=4672beb70c1f4f87acdddfc46df80afc" alt="" className="shrink-0 m-auto aspect-[0.74] w-[62px] max-sm:hidden" />
			<section className="flex justify-center items-center px-16 py-20 w-1/2 h-screen bg-primary-black max-md:px-5 max-md:w-screen max-md:m-auto">
				<div className="flex flex-col max-md:mt-10">
					<h1 className="self-center text-2xl font-bold">Welcome back, Manager!</h1>
					<p className="self-center mt-3.5 text-base">Enter your credentials to access your account</p>
					<form>
						<InputField label="Name" type="text" />
						<InputField label="Password" type="password" />
						<Button primary>Log in</Button>
						<Button secondary>Sign in as employee</Button>
					</form>
					<p className="self-center mt-5 text-lg">
						Don't have an account? <a href="#" className="text-white underline">Sign Up</a>
					</p>
				</div>
			</section>
		</main>
	);
}

export default LoginPage;
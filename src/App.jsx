import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

import HomePage from "./components/HomePage";
import AddEmployeePage from "./components/AddEmployeePage";
import MyInfoPage from "./components/MyInfoPage";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import LoginEmployeePage from "./components/LoginEmployeePage";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Navigate to={"/login"} />} />

				<Route path="/home" element={<HomePage />} />

				<Route path="/add-employee" element={<AddEmployeePage />} />

				<Route path="/my-info" element={<MyInfoPage />} />

				<Route path="/login" element={<LoginPage />} />

				<Route path="/loginEmployee" element={<LoginEmployeePage />} />

				<Route path="/register" element={<RegisterPage />} />

				{/* Input rute lain di sini */}
			</Routes>
		</BrowserRouter>
	);
}

export default App;

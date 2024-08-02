import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import HomePage from "./components/HomePage";
import AddEmployeePage from "./components/AddEmployeePage";
import MyInfoPage from "./components/MyInfoPage";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import LoginEmployeePage from "./components/LoginEmployeePage";
import ManagerProtectedRoutes from "./utils/ManagerProtectedRoutes";
import EmployeeProtectedRoutes from "./utils/EmployeeProtectedRotes";
import NotFound from "./components/NotFound";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to={"/login"} />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/loginEmployee" element={<LoginEmployeePage />} />
                <Route path="/register" element={<RegisterPage />} />

                <Route element={<ManagerProtectedRoutes />}>
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/add-employee" element={<AddEmployeePage />} />
                </Route>

                <Route element={<EmployeeProtectedRoutes />}>
                    <Route path="/my-info" element={<MyInfoPage />} />
                </Route>

                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

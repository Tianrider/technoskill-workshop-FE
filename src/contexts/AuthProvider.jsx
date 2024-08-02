import { useState } from "react";
import AuthContext from "./AuthContext";

const AuthProvider = ({ children }) => {
    const [userRole, setUserRole] = useState(null);

    return (
        <AuthContext.Provider value={[userRole, setUserRole]}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

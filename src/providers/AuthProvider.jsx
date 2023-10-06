import { createContext } from "react";

// 1. here we create auth context
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    // aikhane authinfo ar vitore ja ja dibo ta akhn sob jayga thake use korte parbo
    const authInfo = {}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
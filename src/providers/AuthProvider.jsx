import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../firbase/firbase.config";

// 1. here we create auth context
export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);



    // aikhane auth, email, password niya firebase ar createUser re call kore dibe and seta return kore dibo
    // ai user to direct register a jaite parbena tai amra aita abr authinfo te pathay dibo jate sob jay thake use korte pari
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    }


    // aikhane authinfo ar vitore ja ja dibo ta akhn sob jayga thake use korte parbo
    const authInfo = {
        user,
        // aikhane createUser disi karon jate createUser function ta sob jayga thake access korte pari
        createUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
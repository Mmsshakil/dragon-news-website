import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firbase/firbase.config";

// 1. here we create auth context
export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    // 2. user change hobe bar bar registration ar somoy tai usestate disi
    const [user, setUser] = useState(null);



    // 3. aikhane auth, email, password niya firebase ar createUser re call kore dibe and seta return kore dibo
    // ai user to direct register a jaite parbena tai amra aita abr authinfo te pathay dibo jate sob jay thake use korte pari
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    }

    // 8. logout korbo
    const logOut = () => {
        return signOut(auth);
    }


    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    // --------------------------------------------------------------------------------
    // 7. ai part ta soja mokhosto
    // aita use korsi karon jate refresh dilao data gola sob jayga thake use korte pari
    useEffect(() => {
        
      const unSubscribe =  onAuthStateChanged(auth, currentUser => {
            console.log('User in the auth state change', currentUser);
            setUser(currentUser);
            
        });
        return () => {
            unSubscribe();
        }
        

    }, [])
    // ----------------------------------------------------------------------------------


    //4. aikhane authinfo ar vitore ja ja dibo ta akhn sob jayga thake use korte parbo
    const authInfo = {
        user,
        // aikhane createUser disi karon jate createUser function ta sob jayga thake access korte pari
        createUser,
        logOut,
        signIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
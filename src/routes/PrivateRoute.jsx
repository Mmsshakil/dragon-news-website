import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    // console.log(user);

    if(loading){
        return <div className="flex justify-center my-[40vh] "> <span className="loading loading-lg loading-spinner text-success"></span></div>;
    }

    if(user){
        return children;
    }


    return <Navigate to="/login"></Navigate>
};

export default PrivateRoute;
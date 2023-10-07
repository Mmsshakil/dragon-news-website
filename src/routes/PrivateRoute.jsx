import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    // console.log(user);
    const location = useLocation();
    console.log(location.pathname);

    if(loading){
        return <div className="flex justify-center my-[40vh] "> <span className="loading loading-lg loading-spinner text-success"></span></div>;
    }

    if(user){
        return children;
    }


    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoute;
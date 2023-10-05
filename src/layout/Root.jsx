import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="container mx-auto max-w-7xl font-poppins">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;
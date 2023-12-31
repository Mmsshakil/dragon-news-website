import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {

    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate =  useNavigate();


    console.log('location in the login page', location);

    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

        // const email = e.target.email.value;
        // const password = e.target.password.value;
        // console.log(email, password);

        // signIn setup
        signIn(email, password)
        .then(result =>{
            console.log('signin sucess', result);

            // navigate after login
            navigate(location?. state ? location.state : '/')
        })
        .catch(error =>{
            console.log(error.meassage);
        })
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="w-full md:w-2/3 lg:w-1/2 p-20 text-black mx-auto bg-slate-300 ">
                <h2 className="text-center text-3xl font-semibold">Please Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered text-white" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text  text-black">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered text-white" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover  text-black">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className="font-semibold text-center mt-3">Dont’t Have An Account ?<span className="text-orange-500"><Link to="/register"> Register</Link> </span></p>
            </div>
        </div>
    );
};

export default Login;
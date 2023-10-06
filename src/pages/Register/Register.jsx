import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";

const Register = () => {

    const handleRegister = e => {
        e.preventDefault();
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);

        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');

        console.log(name,photo,email, password);

        // const email = e.target.email.value;
        // const password = e.target.password.value;
        // console.log(email, password);
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="w-full md:w-2/3 lg:w-1/2 p-20 text-black mx-auto bg-slate-300 ">
                <h2 className="text-center text-3xl font-semibold">Register your account</h2>
                <form  onSubmit={handleRegister}>
                    <div className="form-control mb-3">
                        <label className="label">
                            <span className="label-text text-black">Your Name</span>
                        </label>
                        <input type="text" name="name" placeholder="name" className="input input-bordered text-white" required />
                    </div>
                    <div className="form-control mb-3">
                        <label className="label">
                            <span className="label-text text-black">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="photo url" className="input input-bordered text-white" required />
                    </div>
                    <div className="form-control mb-3">
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
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                <p className="font-semibold text-center mt-3">Already Have An Account ?<span className="text-orange-500"><Link to="/login"> Login</Link> </span></p>
            </div>
        </div>
    );
};

export default Register;
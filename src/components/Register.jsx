import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext, useState } from "react";
import { updateProfile } from "firebase/auth";

const Register = () => {

    const [loginError, setloginError] = useState('')
    const { createUser } = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        // console.log(e.currentTarget)
        const form = new FormData(e.currentTarget);


        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        // console.log(form.get);
        console.log(name, photo, email, password);
        //create user
        setloginError('');

        if (password.length < 6) {
            setloginError('please should 6 character in password');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setloginError('Your password should have one upper at least chareacters')
            return;

        }
        // create user

        createUser(email, password)
            .then(result => {
                console.log(result.user)
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photo
                })
                    .then(res => {
                        console.log(res);
                        window.location.reload();
                    })
                    .catch(error => {
                        console.log(error.message);
                    })
            })
            .catch(error => {
                setloginError(error.message)
                console.error(error)
            })



    }
    return (
        <div>
            <Helmet>
                <title>To Do | Register</title>
            </Helmet>
            <div>
                <h2 className="text-3xl my-10 text-center">Please Register</h2>

                <form onSubmit={handleRegister} className=" md:w-3/4 lg:w-1/2 mx-auto" >


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name" className="input input-bordered" required name="name" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" placeholder="Photo URL" className="input input-bordered" required name="photo" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required name="email" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required name="password" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>

                <p className="text-center mt-4">Already  have an account <Link to="/login" className="text-blue-600 font-bold">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;
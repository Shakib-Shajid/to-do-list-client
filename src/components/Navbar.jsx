import { Link } from "react-router-dom"
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider"
import { signOut, getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";

const Navbar = () => {

    const navLinks =
        <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Guideline">Guideline</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
        </>
    const { user, logOut } = useContext(AuthContext);


    const handleSignOut = () => {
        const auth = getAuth(app);
        logOut()
            .then()
            .catch()

        signOut(auth)
            .then()
            .catch()

    }
    return (

        <div className="navbar bg-base-100 font-medium text-xl top-0 z-50 sticky">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-lg">To Do List</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <div className="flex justify-evenly items-center">
                        <span>{user.displayName} </span>
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={user.photoURL} />
                            </div>
                        </label>
                        <button onClick={handleSignOut} className="btn">Sign out</button>
                    </div>

                        :
                        <div className="flex items-center gap-4">
                            <Link to="/login">
                                <button className="btn">Login</button>
                            </Link>
                        </div>
                }


            </div>
        </div>
    );
};

export default Navbar;
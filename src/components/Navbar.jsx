import { Link } from "react-router-dom"

const Navbar = () => {

    const navLinks =
        <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Guideline">Guideline</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </>
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
                <Link to="/login" className="btn btn-neutral text-white">Login</Link>
            </div>
        </div>
    );
};

export default Navbar;
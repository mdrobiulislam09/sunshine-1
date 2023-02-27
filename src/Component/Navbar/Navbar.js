import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import './Navbar.css';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(() => {
                console.error('Error logging out')
            })
    }


    const navItems = <>
        <li><Link className='sadu' to='/'>Home</Link></li>
        <li><Link className='sadu' to='/blog'>Blog</Link></li>
        <li><Link className='sadu' to='/adservice'>Add-Service</Link></li>
        {
            user?.uid ? <>
                {/* <li><Link>My Review</Link></li> */}
                <li><Link className='sadu' to='/mycomments'>My Comments</Link></li>
                <li><Link className='sadu' onClick={handleLogOut}>Logout</Link></li>
            </>
                :
                <>
                    <li><Link className='sadu' to='/register'>Register</Link></li>
                    <li><Link className='sadu' to='/login'>Login</Link></li>
                </>
        }
    </>
    return (
        <div className="navbar navborder p-2 bgcl text-base-content top-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu vanilnav menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <h3 className='mb-2 text-3xl font-bold'><span className='vanilacolor'>PhotoGrapher</span> <span className='sadu'>Hood</span></h3>
            </div>
            <div className="navbar-center">
                <></>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0 vanilnav">
                    {navItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
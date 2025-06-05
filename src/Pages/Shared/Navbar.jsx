import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';
import { auth } from '../../Firebase/firebase.init';
import logo from '../../assets/logo.png';

const Navbar = () => {

    const { user, signOutUser } = use(AuthContext);

    const handleSignOut = () => {
        signOutUser(auth)
            .then(() =>
                console.log('user signed out'))
            .catch(error => {
                console.log(error)
            })
    }

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        {/* for job applicants */}
        {
            user && <>
                <li><NavLink to="/applications">My Applications</NavLink></li>
            </>
        }
        {/* for recruters */}
        {
            user && <>
                <li><NavLink to="/addJobs">Add Jobs</NavLink></li>
                <li><NavLink to="/myPostedJobs">My Posted Jobs</NavLink></li>
            </>
        }
    </>

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl"><img src={logo} alt="logo"  className='w-10' />Job Portal</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>

            <div className="navbar-end">

                {/* theme controller started */}
                <div className="dropdown ">
                    <div tabIndex={0} role="button" className="btn m-1">
                        Theme
                        <svg
                            width="12px"
                            height="12px"
                            className="inline-block h-2 w-2 fill-current opacity-60"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 2048 2048">
                            <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
                        </svg>
                    </div>
                    <ul 
                    tabIndex={0} 
                    className="dropdown-content bg-base-300 rounded-box z-1 w-52 p-2 shadow-2xl"
                    onChange={(e) => {
                        const theme = e.target.value;
                        document.documentElement.setAttribute('data-theme', theme);
                        localStorage.setItem('theme', theme);
                    }}
                    >
                        <li>
                            <input
                                type="radio"
                                name="theme-dropdown"
                                className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
                                aria-label="light"
                                value="light" />
                        </li>
                        <li>
                            <input
                                type="radio"
                                name="theme-dropdown"
                                className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
                                aria-label="dark"
                                value="dark" />
                        </li>
                        <li>
                            <input
                                type="radio"
                                name="theme-dropdown"
                                className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
                                aria-label="retro"
                                value="retro" />
                        </li>
                        <li>
                            <input
                                type="radio"
                                name="theme-dropdown"
                                className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
                                aria-label="Valentine"
                                value="valentine" />
                        </li>
                        <li>
                            <input
                                type="radio"
                                name="theme-dropdown"
                                className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
                                aria-label="Aqua"
                                value="aqua" />
                        </li>
                        <li>
                            <input
                                type="radio"
                                name="theme-dropdown"
                                className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
                                aria-label="cupcake"
                                value="cupcake" />
                        </li>
                        <li>
                            <input
                                type="radio"
                                name="theme-dropdown"
                                className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
                                aria-label="forest"
                                value="forest" />
                        </li>
                    </ul>
                </div>
                {/* theme controller ended */}


                {/* for job applicants */}

                {
                    user ? <button className='btn' onClick={handleSignOut}>Sign Out</button> :
                        <>
                            <Link className='btn' to="/auth/register">Register</Link>
                            <Link className='btn' to="/auth/signIn">SignIn</Link>
                        </>
                }

            </div>
        </div>
    );
};

export default Navbar;
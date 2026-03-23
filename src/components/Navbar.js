import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = ({ fixed }) => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const location = useLocation();

    const handleToggle = () => {
        setNavbarOpen(!navbarOpen);
    };

    return (
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-gradient-to-r from-teal-400 to-purple-600 mb-3">
            <div className="w-full px-4 pr-0 mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full relative flex justify-between md:w-auto md:static md:block md:justify-start">
                    <NavLink
                        to="/"
                        className="text-2xl font-bold leading-relaxed inline-block mr-4 py-1 whitespace-nowrap text-white"
                    >
                        <img draggable="false" src={'/microurl.webp'} alt="microURL-logo" className="w-10 h-10 inline-block mx-2" />
                        microURLs
                    </NavLink>
                    <button
                        className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none"
                        type="button"
                        onClick={handleToggle}
                    >
                        {navbarOpen ? (
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </button>
                </div>
                <div className={`md:flex flex-grow items-center ${navbarOpen ? "flex" : "hidden"}`}>
                    <ul className="flex flex-col md:flex-row list-none md:ml-auto">
                        <li className="nav-item">
                            <NavLink
                                exact={"true"}
                                to="/"
                                className={`px-3 py-2 flex items-center font-bold leading-snug text-white hover:opacity-75 ${location.pathname === "/" ? "md:text-[#2ED3BF] text-[#8C3FE7] underline underline-offset-4" : ""
                                    }`}
                            >
                                <span className="ml-2 text-lg">Home</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact={"true"}
                                to="/myurls"
                                className={`px-3 py-2 flex items-center font-bold leading-snug text-white hover:opacity-75 ${location.pathname === "/myurls" ? "md:text-[#2ED3BF] text-[#8C3FE7] underline underline-offset-4" : ""
                                    }`}
                            >
                                <span className="ml-2 text-lg">My URLs</span>
                            </NavLink>
                        </li>
                        {/* {user ?
                            <>
                                <li className="nav-item">
                                    <NavLink
                                        to="/login"
                                        className={`px-3 py-2 flex items-center font-bold leading-snug text-white hover:opacity-75 ${location.pathname === "/login" ? "md:text-[#2ED3BF] text-[#8C3FE7] underline underline-offset-4" : ""
                                            }`}
                                    >
                                        <span className="ml-2 text-lg">Sign In</span>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        to="/signup"
                                        className={`px-3 py-2 flex items-center font-bold leading-snug text-white hover:opacity-75 ${location.pathname === "/signup" ? "md:text-[#2ED3BF] text-[#8C3FE7] underline underline-offset-4" : ""
                                            }`}
                                    >
                                        <span className="ml-2 text-lg ">Sign Up</span>
                                    </NavLink>
                                </li>
                            </>
                            :
                            <>
                                <li className="nav-item">
                                    <NavLink
                                        to="/dashboard"
                                        className={`px-3 py-2 flex items-center font-bold leading-snug text-white hover:opacity-75 ${location.pathname === "/dashboard" ? "md:text-[#2ED3BF] text-[#8C3FE7] underline underline-offset-4" : ""
                                            }`}
                                    >
                                        <span className="ml-2 text-lg">Dashboard</span>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        // to="/logout"
                                        className={`px-3 py-2 flex items-center font-bold leading-snug text-white hover:opacity-75 ${location.pathname === "/logout" ? "md:text-[#2ED3BF] text-[#8C3FE7] underline underline-offset-4" : ""
                                            }`}
                                    >
                                        <span className="ml-2 text-lg ">Log Out</span>
                                    </NavLink>
                                </li>
                            </>
                        } */}
                    </ul>
                </div>
            </div>
        </nav >
    );
}


export default Navbar;

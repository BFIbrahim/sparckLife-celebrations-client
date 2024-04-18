import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";


const Navigation = () => {
    return (
        <>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl uppercase italic font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">SparkLife <p className="hidden md:block lg:block">Celebration</p> </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className="font-bold rounded-md hover:bg-gradient-to-r from-indigo-400 to-cyan-400 hover:text-white"><Link>Home</Link></li>

                        <li className="font-bold rounded-md hover:bg-gradient-to-r from-indigo-400 to-cyan-400 hover:text-white"><Link>About</Link></li>

                        <li className="font-bold rounded-md hover:bg-gradient-to-r from-indigo-400 to-cyan-400 hover:text-white"><Link>Events</Link></li>

                        <li className="font-bold rounded-md hover:bg-gradient-to-r from-indigo-400 to-cyan-400 hover:text-white"><Link>Gallery</Link></li>

                        <li className="font-bold rounded-md hover:bg-gradient-to-r from-indigo-400 to-cyan-400 hover:text-white"><Link>Team</Link></li>

                        <li className="font-bold rounded-md hover:bg-gradient-to-r from-indigo-400 to-cyan-400 hover:text-white"><Link>Contact</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn bg-white border-none bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full">
                        <FaUser className="md:text-2xl lg:text-2xl"/>
                    </a>
                </div>
            </div>
        </>
    );
};

export default Navigation;
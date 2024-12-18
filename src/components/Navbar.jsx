// import React from 'react';
// import { AiOutlineHeart } from 'react-icons/ai';
// import { FiShoppingCart } from 'react-icons/fi';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//     return (
//         <div className="navbar bg-base-100 bg-[rgba(149,56,226,1)]">
//             <div className="navbar-start">
//                 <div className="dropdown">
//                     <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//                         <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="h-5 w-5"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor">
//                             <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth="2"
//                                 d="M4 6h16M4 12h8m-8 6h16" />
//                         </svg>
//                     </div>
//                     <ul
//                         tabIndex={0}
//                         className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
//                         <li><Link to="/">Home</Link></li>
//                         <li><Link to="/statistics">Statistics</Link></li>
//                         <li><Link to="/dashboard">Dashboard</Link></li>
//                         <li><Link to="/offer">Offers</Link></li>
//                     </ul>
//                 </div>
//                 <Link to="/" className="btn btn-ghost text-xl">Gadget Heaven</Link>
//             </div>
//             <div className="navbar-center hidden lg:flex">
//                 <ul className="menu menu-horizontal px-1">
//                     <li><Link to="/">Home</Link></li>
//                     <li><Link to="/statistics">Statistics</Link></li>
//                     <li><Link to="/dashboard">Dashboard</Link></li>
//                     <li><Link to="/offer">Offers</Link></li>
//                 </ul>
//             </div>
//             <div className="navbar-end flex gap-5">
//                 <a><FiShoppingCart /></a>
//                 <a><AiOutlineHeart /></a>
//             </div>
//         </div>
//     );
// };

// export default Navbar;
















import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();

    // Conditionally set the background color
    const navbarBgColor = location.pathname === '/' 
        ? 'bg-[rgba(149,56,226,1)]'  // Home page background
        : 'bg-white'; // Other pages background

    return (
        <div className={`navbar px-5  ${navbarBgColor}`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to={'/stat'}>Statistics</Link></li>
                        <li><Link to="/dashboard">Dashboard</Link></li>
                        <li><Link to="/offer">Offers</Link></li>
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-xl">Gadget Heaven</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to={'/stat'}>Statistics</Link></li>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/offer">Offers</Link></li>
                </ul>
            </div>
            <div className="navbar-end flex gap-5">
                <a><FiShoppingCart /></a>
                <a><AiOutlineHeart /></a>
            </div>
        </div>
    );
};

export default Navbar;


import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import navItems from '../../data/navItems.json';

const Navbar = () => {
    return (
        <header className="main-header fixed z-50 w-full bg-white shadow-md">
            <div className="top-bar bg-gray-900 text-white text-xs py-2 px-4">
                <div className="flex justify-between items-center max-w-7xl mx-auto">
                    <div className="topbar-left flex items-center space-x-4">
                        <span className="text-gray-400 hidden md:block">Miércoles, 27 de agosto de 2025</span>
                    </div>
                    <div className="topbar-right">
                        <ul className="flex space-x-3 ml-4">
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors"><i className="fab fa-facebook-f text-base"></i></a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors"><i className="fab fa-twitter text-base"></i></a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors"><i className="fab fa-instagram text-base"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between p-4 max-w-7xl mx-auto">
                <div className="flex-shrink-0">
                    <Link to="/" className="logo">
                        <img src="/src/assets/avatar/titulo01.jpeg" alt="Website Logo" className="h-10 rounded" />
                    </Link>
                </div>
                <div className="flex-grow mx-4">
                    <div className="relative">
                        <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                        <input
                            type="search"
                            placeholder="Buscar amigos, posts o videos"
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>
                <nav className="flex items-center space-x-4">
                    <NavLink to="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</NavLink>
                    <div className="relative">
                        <img src="/src/assets/person/user.jpg" alt="User Avatar" className="h-10 w-10 rounded-full object-cover border-2 border-blue-500" />
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
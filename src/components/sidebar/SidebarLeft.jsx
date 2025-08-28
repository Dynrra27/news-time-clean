import React from 'react';
import { NavLink } from 'react-router-dom';
import navItems from '../../data/navItems.json';

const SidebarLeft = () => {
  return (
    <aside className="w-1/4 hidden md:block pr-4">
      <div className="bg-white shadow-md rounded-lg p-4 sticky top-20">
        <h3 className="font-bold text-gray-800 mb-3">Menú Principal</h3>
        <ul className="space-y-2">
          {navItems.map(item => (
            <li key={item.id}>
              <NavLink 
                to={item.path} 
                className={({ isActive }) =>
                  `flex items-center space-x-3 p-2 rounded-lg transition-colors duration-200 
                  ${isActive ? 'bg-blue-100 text-blue-600 font-semibold' : 'text-gray-700 hover:bg-gray-100'}`
                }
              >
                <i className={`${item.icon} text-lg`}></i>
                <span>{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-white shadow-md rounded-lg p-4 mt-4">
        <h3 className="font-semibold text-gray-800 mb-3">Publicidad</h3>
        <a href="#">
            <img src="/src/assets/ads/bg.jpg" alt="Store advertisement" className="w-full h-auto rounded-lg object-cover mb-2" />
        </a>
        <p className="text-sm text-gray-600">¡Compra en nuestra tienda en línea!</p>
      </div>
    </aside>
  );
};

export default SidebarLeft;
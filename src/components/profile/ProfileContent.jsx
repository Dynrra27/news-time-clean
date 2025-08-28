import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import ProfilePosts from './ProfilePosts';
import ProfileAbout from './ProfileAbout';
import ProfilePhotos from './ProfilePhotos';
import ProfileVideos from './ProfileVideos';
import ProfileMusic from './ProfileMusic';

const ProfileContent = () => {
  return (
    <div className="bg-white shadow-md rounded-lg mb-4">
      {/* Portada y foto de perfil */}
      <div className="relative">
        <img 
          src="/src/assets/profile/cover-photo.jpg" 
          alt="Portada del perfil" 
          className="w-full h-48 object-cover rounded-t-lg" 
        />
        <div className="absolute -bottom-12 left-6">
          <img 
            src="/src/assets/person/user.jpg" 
            alt="Foto de perfil" 
            className="w-24 h-24 object-cover rounded-full border-4 border-white shadow-md" 
          />
        </div>
      </div>

      {/* Información de usuario y botones */}
      <div className="p-6 pt-16">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Dynrra Garcia</h2>
            <p className="text-gray-500">Diseñador Gráfico | Desarrollador Web</p>
          </div>
          <div className="flex space-x-2">
            <button className="bg-blue-600 hidden  text-white font-semibold py-2 px-4 rounded-full shadow-md hover:bg-blue-700 transition-colors">
              <i className="fas fa-plus mr-1"></i>Añadir Amigo
            </button>
            <button className="bg-gray-500 text-white font-semibold py-2 px-4 rounded-full shadow-md hover:bg-teal-800 transition-colors">
              <i className="fas fa-plus mr-1"></i>Editar Perfil
            </button>
            <button className="bg-gray-200 hidden text-gray-800 font-semibold py-2 px-4 hover:text-neutral-950 rounded-full shadow-md hover:bg-yellow-600 transition-colors">
              <i className="fas fa-envelope mr-1"></i>Mensaje
            </button>
          </div>
        </div>

        {/* Navegación del perfil */}
        <div className="mt-6 border-b border-gray-200">
          <ul className="flex space-x-6">
            <li><NavLink to="photos" className={({isActive}) => `block py-2 font-semibold transition-colors duration-200 ${isActive ? 'border-b-2 border-blue-600 text-blue-600' : 'border-transparent text-gray-600 hover:text-gray-800'}`}>Fotos</NavLink></li>
            <li><NavLink to="videos" className={({isActive}) => `block py-2 font-semibold transition-colors duration-200 ${isActive ? 'border-b-2 border-blue-600 text-blue-600' : 'border-transparent text-gray-600 hover:text-gray-800'}`}>Videos</NavLink></li>
            <li><NavLink to="music" className={({isActive}) => `block py-2 font-semibold transition-colors duration-200 ${isActive ? 'border-b-2 border-blue-600 text-blue-600' : 'border-transparent text-gray-600 hover:text-gray-800'}`}>Música</NavLink></li>
            <li><NavLink to="about" className={({isActive}) => `block py-2 font-semibold transition-colors duration-200 ${isActive ? 'border-b-2 border-blue-600 text-blue-600' : 'border-transparent text-gray-600 hover:text-gray-800'}`}>Acerca de</NavLink></li>
          </ul>
        </div>
      </div>

      {/* Contenido dinámico según la ruta */}
      <div className="p-6 pt-0">
        <Routes>
          <Route path="photos" element={<ProfilePhotos />} />
          <Route path="videos" element={<ProfileVideos />} />
          <Route path="music" element={<ProfileMusic />} />
          <Route path="about" element={<ProfileAbout />} />
        </Routes>

        {/* Input para nuevos posts y posts del usuario (sección fija) */}
        <div className="mt-6">
          <div className="bg-gray-100 p-4 rounded-lg flex items-center space-x-3">
            <img src="/src/assets/person/user.jpg" alt="Tu avatar" className="w-10 h-10 rounded-full object-cover" />
            <input 
              type="text" 
              placeholder="¿Qué estás pensando, Dynrra?"
              className="flex-1 p-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500" 
            />
          </div>
          <div className="mt-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4 border-b border-gray-200">Últimos Posts</h3>
            <ProfilePosts />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileContent;
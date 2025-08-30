import React from 'react';

const ShareBox = () => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 mb-4">
            <div className="flex items-center space-x-3 border-b border-gray-200 pb-4 mb-4">
                <img src="/src/assets/person/user.jpg" alt="Tu avatar" className="w-12 h-12 rounded-full object-cover" />
                <input 
                    type="text" 
                    placeholder="¿Qué estás pensando, Dynrra?"
                    className="flex-1 p-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500" 
                />
            </div>
            <div className="flex justify-between items-center text-gray-500">
                <div className="flex space-x-4">
                    <button className="flex items-center space-x-2 hover:text-blue-600 transition-colors">
                        <i className="fas fa-camera text-lg"></i>
                        <span>Foto/Video</span>
                    </button>
                    <button className="flex items-center space-x-2 hover:text-green-600 transition-colors">
                        <i className="fas fa-user-tag text-lg"></i>
                        <span>Etiquetar Amigos</span>
                    </button>
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-700 transition-colors">
                    Publicar
                </button>
            </div>
        </div>
    );
};

export default ShareBox;
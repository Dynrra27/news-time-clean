import React from 'react';

const ShareBox = ({ openModal }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 mb-4">
            <div 
                className="flex items-center space-x-3 border-b border-gray-200 pb-4 mb-4 cursor-pointer"
                onClick={() => openModal('createPost')}
            >
                <img src="/src/assets/person/user.jpg" alt="Tu avatar" className="w-12 h-12 rounded-full object-cover" />
                <div className="flex-1 p-2 border border-gray-300 rounded-full text-gray-500">
                    ¿Qué estás pensando, Dynrra?
                </div>
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
            </div>
        </div>
    );
};

export default ShareBox;
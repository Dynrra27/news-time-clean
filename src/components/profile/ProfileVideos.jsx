import React from 'react';
import profileData from '../../data/profileContent.json';

const ProfileVideos = () => {
    return (
        <div className="bg-white p-6 shadow-md rounded-lg mb-4">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Mis Videos</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {profileData.photos.map(photo => (
                    <div key={photo.id} className="w-full h-40 overflow-hidden rounded-lg">
                        <img 
                            src={photo.url} 
                            alt={`Foto ${photo.id}`} 
                            className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105" 
                        />
                    </div>
                ))}
            </div>
            <div className="text-center p-4 mt-4 border-t border-gray-200">
                <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-full shadow-md hover:bg-blue-700 transition-colors">
                    <i className="fas fa-plus mr-1"></i> Subir Video
                </button>
            </div>
        </div>
    );
};

export default ProfileVideos;
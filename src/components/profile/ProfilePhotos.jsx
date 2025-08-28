import React from 'react';
import profileData from '../../data/profileContent.json';

const ProfilePhotos = () => {
  return (
    <div className="bg-white p-6 shadow-md rounded-lg mb-4">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Fotos</h3>
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
    </div>
  );
};

export default ProfilePhotos;
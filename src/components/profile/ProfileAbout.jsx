import React from 'react';
import profileContent from '../../data/profileContent.json';

const ProfileAbout = () => {
    return (
        <div className="bg-white p-6 shadow-md rounded-lg mb-4">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Acerca de</h3>
            <p className="text-gray-600 mb-4">{profileContent.about.bio}</p>
            
            <ul className="space-y-2">
                {profileContent.about.details.map((item, index) => (
                    <li key={index} className="flex items-center space-x-2 text-gray-700">
                        <span className="font-semibold">{item.label}:</span>
                        <span>{item.value}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProfileAbout;
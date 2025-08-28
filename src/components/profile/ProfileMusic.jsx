import React from 'react';
import profileData from '../../data/profileContent.json';

const ProfileMusic = () => {
    return (
        <div className="bg-white p-6 shadow-md rounded-lg mb-4">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Mi Música</h3>
            <ul className="space-y-2">
                {profileData.music.map(song => (
                    <li key={song.id} className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 transition-colors">
                        <div className="flex items-center space-x-3">
                            <i className="fas fa-music text-blue-500"></i>
                            <div>
                                <p className="font-semibold">{song.title}</p>
                                <p className="text-sm text-gray-600">{song.artist}</p>
                            </div>
                        </div>
                        <button className="text-gray-500 hover:text-blue-600">
                            <i className="fas fa-play"></i>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProfileMusic;
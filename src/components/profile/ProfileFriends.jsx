import React from 'react';
import profileData from '../../data/profileContent.json';

const ProfileFriends = () => {
  return (
    <div className="bg-white p-6 shadow-md rounded-lg mb-4">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Amigos ({profileData.friends.length})</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {profileData.friends.map(friend => (
          <div key={friend.id} className="text-center">
            <img src={friend.avatar} alt={`Avatar de ${friend.name}`} className="w-20 h-20 object-cover rounded-full mx-auto mb-2" />
            <span className="text-sm font-medium text-gray-700">{friend.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileFriends;
import React from 'react';
import usersData from '../../data/users.json';
import genericContent from '../../data/genericContent.json';

const SidebarRight = () => {
    const onlineFriends = usersData.users.slice(0, 4);
    
    return (
        <aside className="w-1/4 hidden md:block pl-4">
            <div className="bg-white shadow-md rounded-lg p-4 sticky top-20">
                <h3 className="font-semibold text-gray-800 mb-3">Amigos Online</h3>
                <ul className="space-y-2">
                    {onlineFriends.map(friend => (
                        <li key={friend.id} className="flex items-center space-x-3">
                            <div className="relative">
                                <img src={friend.avatar} alt={`Foto de ${friend.username}`} className="w-8 h-8 rounded-full object-cover" />
                                <span className="absolute bottom-0 right-0 w-2 h-2 bg-green-500 rounded-full ring-2 ring-white"></span>
                            </div>
                            <span>{friend.username}</span>
                        </li>
                    ))}
                </ul>
            </div>
             {/* Social Media Widget (Follow Us) - Always present below friends on these pages */}
          <div className="bg-white shadow-md rounded-lg p-4 mt-4">
            <h3 className="font-semibold text-gray-800 mb-3">Follow Us</h3>
            <div className="grid grid-cols-2 gap-3">
              <a href="#" target="_blank" className="flex items-center justify-between p-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                <i className="fab fa-facebook-f text-lg"></i>
                <div className="flex flex-col items-end">
                  <span className="text-xs">Likes</span>
                  <span className="font-bold text-sm">2.6K</span>
                </div>
              </a>
              <a href="#" target="_blank" className="flex items-center justify-between p-2 rounded-lg bg-blue-400 text-white hover:bg-blue-500 transition-colors">
                <i className="fab fa-twitter text-lg"></i>
                <div className="flex flex-col items-end">
                  <span className="text-xs">Followers</span>
                  <span className="font-bold text-sm">1.4K</span>
                </div>
              </a>
              <a href="#" target="_blank" className="flex items-center justify-between p-2 rounded-lg bg-pink-500 text-white hover:bg-pink-600 transition-colors">
                <i className="fab fa-instagram text-lg"></i>
                <div className="flex flex-col items-end">
                  <span className="text-xs">Followers</span>
                  <span className="font-bold text-sm">1.4K</span>
                </div>
              </a>
              <a href="#" target="_blank" className="flex items-center justify-between p-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors">
                <i className="fab fa-youtube text-lg"></i>
                <div className="flex flex-col items-end">
                  <span className="text-xs">Subscribers</span>
                  <span className="font-bold text-sm">54K</span>
                </div>
              </a>
            </div>
          </div>
            <div className="bg-white shadow-md rounded-lg p-4 mt-4">
                <h3 className="font-semibold text-gray-800 mb-3">Publicidad</h3>
                <a href="#">
                    <img src="/src/assets/ads/adv.jpg" alt="Store advertisement" className="w-full h-auto rounded-lg object-cover mb-2" />
                </a>
                <p className="text-sm text-gray-600">¡Compra en nuestra tienda en línea!</p>
            </div>
        </aside>
    );
};

export default SidebarRight;
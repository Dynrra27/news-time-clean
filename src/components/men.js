import React, { useState } from 'react';

const PostCard = ({ post, openCommentModal }) => {
  const [likesCount, setLikesCount] = useState(post.likes);
  const [isLiked, setIsLiked] = useState(false);
  const [commentsCount, setCommentsCount] = useState(post.commentsCount);
  const [sharesCount, setSharesCount] = useState(post.shares || 0);
  const [likeTooltip, setLikeTooltip] = useState('');
  const [commentTooltip, setCommentTooltip] = useState('');

  const handleLike = () => {
    if (isLiked) {
      setLikesCount(prev => prev - 1);
    } else {
      setLikesCount(prev => prev + 1);
    }
    setIsLiked(!isLiked);
  };

  const handleCommentClick = () => {
    openCommentModal(post);
  };

  const handleShare = () => {
    console.log("Compartir el post:", post.id);
  };

  const handleLikeTooltip = (isLiked) => {
    setLikeTooltip(isLiked ? 'Ya no me gusta' : 'Me gusta');
  };

  const handleCommentTooltip = (hasComments) => {
    setCommentTooltip(hasComments ? 'Ver comentarios' : 'Sé el primero en comentar');
  };

  return (
    <article className="bg-white shadow-md rounded-lg p-4 mb-4">
      <header className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-3">
          <img src={post.userAvatar} alt={`Avatar de ${post.userName}`} className="w-10 h-10 rounded-full object-cover" />
          <div>
            <span className="font-semibold text-gray-800">
              {post.userName}
            </span>
            <div className="flex items-center text-gray-500 text-sm">
              <span className="text-xs mr-1">{post.timeAgo}</span>
            </div>
          </div>
        </div>
      </header>
      <div className="mb-3">
        {post.text && <p className="text-gray-700 mb-2">{post.text}</p>}
        {post.image && (
          <img src={post.image} alt={post.imageDescription || 'Post image'} className="w-full h-full object-cover rounded-lg" />
        )}
      </div>
      <footer className="text-gray-600 text-sm pt-3 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={handleLike}
              onMouseEnter={() => handleLikeTooltip(isLiked)}
              onMouseLeave={() => setLikeTooltip('')}
              className={`relative flex items-center space-x-1 transition-colors ${isLiked ? 'text-red-500' : 'text-gray-600 hover:text-red-500'}`}
            >
              <i className={`${isLiked ? 'fas fa-heart' : 'far fa-heart'}`}></i>
              <span>{likesCount}</span>
              {likeTooltip && (
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs rounded-lg py-1 px-2 whitespace-nowrap">
                  {likeTooltip}
                </div>
              )}
            </button>
            <button
              onClick={handleCommentClick}
              onMouseEnter={() => handleCommentTooltip(commentsCount > 0)}
              onMouseLeave={() => setCommentTooltip('')}
              className="relative flex items-center space-x-1 hover:text-blue-500 transition-colors"
            >
              <i className="far fa-comment"></i>
              <span>{commentsCount}</span>
              {commentTooltip && (
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs rounded-lg py-1 px-2 whitespace-nowrap">
                  {commentTooltip}
                </div>
              )}
            </button>
            <button onClick={handleShare} className="flex items-center space-x-1 hover:text-green-500 transition-colors">
              <i className="fas fa-share-alt"></i>
              <span>{sharesCount}</span>
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1">
              <i className="far fa-eye"></i>
              <span>{post.views}</span>
            </span>
          </div>
        </div>
      </footer>
    </article>
  );
};

export default PostCard;


import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import profileData from '../../data/profileData.json';

const ProfileContent = ({ isLoggedIn }) => {
  const [isFriend, setIsFriend] = useState(false);
  const isCurrentUser = true; // Asumimos que este es el perfil del usuario logueado

  const handleAddFriend = () => {
    if (!isLoggedIn) {
      alert("Debes iniciar sesión para añadir amigos.");
      // Lógica para abrir el modal de login/registro
    } else {
      setIsFriend(true);
      alert("¡Solicitud de amistad enviada!");
    }
  };

  const handleSendMessage = () => {
    if (!isLoggedIn) {
      alert("Debes iniciar sesión para enviar un mensaje.");
      // Lógica para abrir el modal de login/registro
    } else {
      alert("¡Abriendo chat para enviar un mensaje!");
    }
  };

  const handleEditProfile = () => {
    // Lógica para editar el perfil
    alert("Editando el perfil...");
  };

  return (
    <div className="bg-white shadow-md rounded-lg mb-4">
      {/* Portada y foto de perfil */}
      <div className="relative">
        <img 
          src={profileData.coverPhoto} 
          alt="Portada del perfil" 
          className="w-full h-48 object-cover rounded-t-lg" 
        />
        <div className="absolute -bottom-12 left-6">
          <img 
            src={profileData.avatar} 
            alt="Foto de perfil" 
            className="w-24 h-24 object-cover rounded-full border-4 border-white shadow-md" 
          />
        </div>
      </div>

      {/* Información de usuario y botones */}
      <div className="p-6 pt-16">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{profileData.name}</h2>
            <p className="text-gray-500">{profileData.bio}</p>
          </div>
          <div className="flex space-x-2">
            {isCurrentUser ? (
              <button onClick={handleEditProfile} className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-full shadow-md hover:bg-blue-700 transition-colors">
                <i className="fas fa-user-edit mr-1"></i>Editar Perfil
              </button>
            ) : (
              <>
                {!isFriend ? (
                  <button onClick={handleAddFriend} className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-full shadow-md hover:bg-blue-700 transition-colors">
                    <i className="fas fa-plus mr-1"></i>Añadir Amigo
                  </button>
                ) : (
                  <button className="bg-green-600 text-white font-semibold py-2 px-4 rounded-full shadow-md cursor-not-allowed">
                    <i className="fas fa-check mr-1"></i>Amigos
                  </button>
                )}
                <button onClick={handleSendMessage} className="bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-full shadow-md hover:bg-gray-300 transition-colors">
                  <i className="fas fa-envelope mr-1"></i>Mensaje
                </button>
              </>
            )}
          </div>
        </div>

        {/* Navegación del perfil */}
        <div className="mt-6 border-b border-gray-200">
          <ul className="flex space-x-6">
            <li><NavLink to="/profile" end className={({ isActive }) => `block py-2 font-semibold transition-colors duration-200 ${isActive ? 'border-b-2 border-blue-600 text-blue-600' : 'border-transparent text-gray-600 hover:text-gray-800'}`}>Posts</NavLink></li>
            <li><NavLink to="photos" className={({ isActive }) => `block py-2 font-semibold transition-colors duration-200 ${isActive ? 'border-b-2 border-blue-600 text-blue-600' : 'border-transparent text-gray-600 hover:text-gray-800'}`}>Fotos</NavLink></li>
            <li><NavLink to="videos" className={({ isActive }) => `block py-2 font-semibold transition-colors duration-200 ${isActive ? 'border-b-2 border-blue-600 text-blue-600' : 'border-transparent text-gray-600 hover:text-gray-800'}`}>Videos</NavLink></li>
            <li><NavLink to="music" className={({ isActive }) => `block py-2 font-semibold transition-colors duration-200 ${isActive ? 'border-b-2 border-blue-600 text-blue-600' : 'border-transparent text-gray-600 hover:text-gray-800'}`}>Música</NavLink></li>
            <li><NavLink to="about" className={({ isActive }) => `block py-2 font-semibold transition-colors duration-200 ${isActive ? 'border-b-2 border-blue-600 text-blue-600' : 'border-transparent text-gray-600 hover:text-gray-800'}`}>Acerca de</NavLink></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileContent;
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
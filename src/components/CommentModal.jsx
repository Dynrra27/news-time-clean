import React, { useState } from 'react';
import usersData from '../data/users.json';

const CommentModal = ({ isOpen, onClose, post, onComment }) => {
    const [commentText, setCommentText] = useState('');
    const currentUser = usersData.users.length > 0 ? usersData.users[0] : null;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (commentText.trim()) {
            onComment(post.id, commentText);
            setCommentText('');
        }
        onClose();
    };

    if (!isOpen || !post) return null;

    const hasComments = post.comments && post.comments.length > 0;

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-xl max-w-lg w-full m-4 relative max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                <button onClick={onClose} className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors">
                    <i className="fas fa-times"></i>
                </button>
                <h2 className="text-xl font-bold mb-4 text-gray-800">Comentarios</h2>
                
                <div className="border-b border-gray-200 pb-4 mb-4">
                    <div className="flex items-start space-x-3">
                        <img src={post.userAvatar} alt={post.userName} className="w-10 h-10 rounded-full object-cover" />
                        <div>
                            <h3 className="font-semibold">{post.userName}</h3>
                            <p className="text-sm text-gray-600 mt-1">{post.text}</p>
                            {post.image && <img src={post.image} alt="Post" className="mt-2 rounded-lg w-full max-h-64 object-cover" />}
                        </div>
                    </div>
                </div>

                <div className="space-y-4 mb-4">
                    {hasComments ? (
                        post.comments.map(comment => (
                            <div key={comment.id} className="flex items-start space-x-3">
                                <img src={comment.userAvatar} alt={comment.userName} className="w-8 h-8 rounded-full object-cover" />
                                <div>
                                    <h4 className="font-semibold text-sm">{comment.userName}</h4>
                                    <p className="text-sm text-gray-700">{comment.text}</p>
                                    <p className="text-xs text-gray-500 mt-1">{comment.timeAgo}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-500">Sé el primero en comentar.</p>
                    )}
                </div>

                <form onSubmit={handleSubmit} className="flex items-center space-x-2 border-t border-gray-200 pt-4">
                    <textarea
                        className="flex-1 p-2 border border-gray-300 rounded-full resize-none"
                        placeholder="Escribe tu comentario..."
                        rows="1"
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                    ></textarea>
                    <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-600 transition-colors">
                        Publicar
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CommentModal;
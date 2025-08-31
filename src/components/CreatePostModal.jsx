import React, { useState } from 'react';
import usersData from '../data/users.json';

const CreatePostModal = ({ isOpen, onClose }) => {
    const [postText, setPostText] = useState('');
    const [file, setFile] = useState(null);
    const currentUser = usersData.users.length > 0 ? usersData.users[0] : null;

    if (!isOpen) return null;

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handlePostSubmit = () => {
        if (postText.trim() || file) {
            alert("Publicación creada con éxito!");
            onClose();
        } else {
            alert("No puedes publicar un post vacío.");
        }
    };

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 modal-pp overflow-y-auto h-full w-full z-50 flex justify-center items-center" onClick={onClose}>
            <div className="bg-white p-6 rounded-lg shadow-xl max-w-lg w-full m-4 relative" onClick={(e) => e.stopPropagation()}>
                <button onClick={onClose} className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors">
                    <i className="fas fa-times"></i>
                </button>
                <h2 className="text-xl font-bold mb-4 text-gray-800">Crear Nueva Publicación</h2>
                
                <div className="flex items-center space-x-3 mb-4">
                    <img src={currentUser.avatar} alt="Tu avatar" className="w-12 h-12 rounded-full object-cover" />
                    <div>
                        <h3 className="font-semibold text-gray-800">{currentUser.username}</h3>
                        <p className="text-sm text-gray-500">Público</p>
                    </div>
                </div>

                <textarea
                    placeholder="¿Qué estás pensando?"
                    className="w-full p-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="4"
                    value={postText}
                    onChange={(e) => setPostText(e.target.value)}
                ></textarea>
                
                {file && (
                    <div className="mt-4 border-t border-gray-200 pt-4">
                        <h4 className="text-sm font-semibold mb-2">Vista Previa:</h4>
                        {file.type.startsWith('image/') ? (
                            <img src={URL.createObjectURL(file)} alt="Vista previa de la imagen" className="max-h-64 w-full object-cover rounded-md" />
                        ) : (
                            <video src={URL.createObjectURL(file)} controls className="max-h-64 w-full object-cover rounded-md" />
                        )}
                    </div>
                )}

                <div className="mt-4 flex justify-between items-center border-t border-gray-200 pt-4">
                    <div className="flex space-x-2">
                        <label htmlFor="file-input" className="bg-gray-200 text-gray-800 p-2 hover:text-green-50 rounded hover:bg-green-900 transition-colors cursor-pointer">
                            <i className="fas fa-camera text-lm"></i>
                        </label>
                        <input 
                            id="file-input" 
                            type="file" 
                            accept="image/*,video/*" 
                            className="hidden" 
                            onChange={handleFileChange} 
                        />
                        <button className="bg-gray-200 text-gray-800 p-2 rounded hover:text-green-50  hover:bg-green-900 transition-colors">
                            <i className="fas fa-user-tag text-lm"></i>
                        </button>
                    </div>
                    <button 
                        onClick={handlePostSubmit} 
                        className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-full hover:bg-green-900 transition-colors"
                    >
                        Publicar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CreatePostModal;
import React, { useState } from 'react';

const CreateStoryModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto modal-pp h-full w-full z-50 flex justify-center items-center" onClick={onClose}>
            <div className="bg-white p-6 rounded-lg shadow-xl max-w-4xl w-full m-4 relative" onClick={(e) => e.stopPropagation()}>
                <button onClick={onClose} className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors">
                    <i className="fas fa-times"></i>
                </button>
                <h2 className="text-xl font-bold mb-4 text-gray-800">Crear Nueva Historia</h2>
                
                <div className="flex flex-wrap -mx-2">
                    {/* Vista principal para subir contenido */}
                    <div className="w-full md:w-3/4 px-2 mb-4 md:mb-0">
                        <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 flex flex-col items-center justify-center h-full">
                            <i className="fas fa-upload text-6xl text-gray-400 mb-4"></i>
                            <h4 className="text-lg font-semibold mb-2">Arrastra y suelta tu foto o vídeo aquí</h4>
                            <label className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-full shadow-md hover:bg-blue-700 transition-colors cursor-pointer">
                                Seleccionar archivo
                                <input type="file" className="hidden" />
                            </label>
                        </div>
                    </div>

                    {/* Menú de opciones lateral */}
                    <div className="w-full md:w-1/4 px-2">
                        <div className="bg-white rounded-lg shadow-md border border-gray-200">
                            <div className="p-4 border-b border-gray-200">
                                <h3 className="font-semibold text-lg">Opciones</h3>
                            </div>
                            <ul className="divide-y divide-gray-200">
                                <li className="flex items-center p-4 space-x-3 hover:bg-gray-100 cursor-pointer">
                                    <i className="fas fa-font text-xl text-gray-600"></i>
                                    <span>Texto</span>
                                </li>
                                <li className="flex items-center p-4 space-x-3 hover:bg-gray-100 cursor-pointer">
                                    <i className="fas fa-smile text-xl text-gray-600"></i>
                                    <span>Pegatinas</span>
                                </li>
                                <li className="flex items-center p-4 space-x-3 hover:bg-gray-100 cursor-pointer">
                                    <i className="fas fa-brush text-xl text-gray-600"></i>
                                    <span>Pincel</span>
                                </li>
                                <li className="flex items-center p-4 space-x-3 hover:bg-gray-100 cursor-pointer">
                                    <i className="fas fa-image text-xl text-gray-600"></i>
                                    <span>Filtros</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div className="mt-4 flex justify-end border-t border-gray-200 pt-4">
                    <button onClick={onClose} className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-full hover:bg-blue-700 transition-colors">
                        Publicar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CreateStoryModal;
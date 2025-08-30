import React from 'react';
import jobOffers from '../../data/jobOffers.json';
import { Link } from 'react-router-dom';

const JobSearchPage = () => {
    return (
        <div className="flex-1 w-full px-0 md:px-4">
            <div className="bg-white shadow-md rounded-lg p-6 mb-4">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Ofertas de Empleo</h2>
                <div className="space-y-4">
                    {jobOffers.map(job => (
                        <div key={job.id} className="p-4 bg-gray-100 rounded-lg shadow">
                            <h3 className="font-bold">{job.title}</h3>
                            <p className="text-sm text-gray-600">Empresa: {job.company}</p>
                            <p className="text-sm text-gray-600">Ubicación: {job.location}</p>
                            <p className="text-gray-500 mt-2">{job.description}</p>
                            <div className="mt-4 flex justify-between items-center">
                                <span className="text-sm text-gray-600 flex items-center space-x-1">
                                    <i className="fas fa-users"></i>
                                    <span>{job.applications || 0} aplicaciones</span>
                                </span>
                                <div className="flex space-x-2">
                                    <Link to={`/jobs/${job.id}`} className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition-colors">
                                        Ver detalles
                                    </Link>
                                    <button className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 transition-colors">
                                        Aplicar
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default JobSearchPage;
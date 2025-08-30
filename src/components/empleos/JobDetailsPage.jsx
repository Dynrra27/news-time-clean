import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import jobOffers from '../../data/jobOffers.json';

const JobDetailsPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const job = jobOffers.find(job => job.id === parseInt(id));

    if (!job) {
        return <div className="p-6 text-center text-gray-500">No se encontró la vacante.</div>;
    }

    return (
        <div className="flex-1 w-full px-0 md:px-4">
            <div className="bg-white shadow-md rounded-lg p-6 mb-4 relative">
                <button 
                    onClick={() => navigate(-1)} 
                    className="absolute top-4 left-4 text-gray-500 hover:text-gray-700 transition-colors flex items-center space-x-2"
                >
                    <i className="fas fa-arrow-left"></i>
                    <span>Volver</span>
                </button>
                <div className="mt-8">
                    <div className="flex items-center space-x-4 mb-4">
                        {job.companyLogo && (
                            <img src={job.companyLogo} alt={`${job.company} logo`} className="w-16 h-16 rounded-full border-2 border-gray-200" />
                        )}
                        <div>
                            <h1 className="text-2xl font-bold text-gray-800">{job.title}</h1>
                            <h2 className="text-xl font-semibold text-gray-600 mt-2">{job.company}</h2>
                            <p className="text-gray-500 text-sm">{job.location}</p>
                        </div>
                    </div>
                    <button className="bg-green-500 text-white px-6 py-1 rounded-full font-semibold hover:bg-green-600 transition-colors">
                        Aplicar ahora
                    </button>
                    <hr className="my-6" />
                    <h3 className="text-2xl font-bold mb-2">Descripción del Empleo</h3>
                    <p className="text-gray-700 mt-4">{job.description}</p>
                    {job.pastJobs && job.pastJobs.length > 0 && (
                        <>
                            <hr className="my-6" />
                            <h3 className="text-xl font-bold mb-4">Otros empleos publicados por {job.company}</h3>
                            <ul className="space-y-2">
                                {job.pastJobs.map(pastJob => (
                                    <li key={pastJob.id} className="bg-gray-100 p-3 rounded-md border-l-4 border-gray-400">
                                        <p className="font-semibold">{pastJob.title}</p>
                                        <p className="text-sm text-gray-600">{pastJob.date}</p>
                                    </li>
                                ))}
                            </ul>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default JobDetailsPage;
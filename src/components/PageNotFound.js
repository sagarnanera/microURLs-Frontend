import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    const goToHome = () => {
        navigate("/");
    };

    return (
        <div className="flex flex-col items-center justify-center flex-grow">
            <h1 className="text-4xl text-white font-bold mb-4">404 - Page Not Found</h1>
            <p className="text-lg text-black-600 mb-6">
                The page you are looking for does not exist.
            </p>
            <div>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                    onClick={goBack}
                >
                    Go Back
                </button>
                <button
                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                    onClick={goToHome}
                >
                    Go to Home
                </button>
            </div>
        </div>
    );
};

export default NotFoundPage;

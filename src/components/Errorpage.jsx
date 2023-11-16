import React from 'react';

const ErrorPage = ({ errorMsg }) => {
    const handleReload = () => {
        window.location.reload();
    };

    return (
        <div className="mx-10 md:mx-5 flex items-center justify-center h-screen bg-black text-white">
            <div className="bg-gray-900 p-12 rounded-md shadow-lg text-center">
                <h2 className=" text-xl md:text-4xl text-red-600 mb-6 font-bold">Oops! Something went wrong.</h2>
                <p className=" text-lg md:text-2xl font-bold text-red-500 mb-8">{errorMsg.msg.message}</p>

                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full focus:outline-none"
                    onClick={handleReload}
                >
                    Reload
                </button>
            </div>
        </div>
    );
};

export default ErrorPage;

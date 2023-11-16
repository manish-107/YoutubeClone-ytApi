import React from 'react';

import LeftNav from './LeftNav';
import { useNavigate } from 'react-router-dom';


const NotFound = () => {

    const navigate = useNavigate();
    const handleReload = () => {
        navigate('/');
    };


    return (
        <div className='flex flex-row h-[calc(100%-56px)]'>
            <LeftNav />
            <div className='grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black'>

                <div className="mx-10 md:mx-5 flex items-center justify-center h-screen bg-black text-white">
                    <div className="bg-gray-900 p-12 rounded-md shadow-lg text-center">
                        <h2 className=" text-xl md:text-4xl text-red-600 mb-6 font-bold">Oops!</h2>
                        <h2 className=" text-xl md:text-4xl text-red-600 mb-6 font-bold">Page not Found.</h2>
                        <p className=" text-lg md:text-2xl font-bold text-red-500 mb-8"></p>

                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full focus:outline-none"
                            onClick={handleReload}
                        >
                            Return to Home Page
                        </button>
                        <a href='https://twitter.com/Mani_xsh'><div className="bg-white/[0.15] text-white text-lg font-bold cursor-pointer h-10 w-25 mt-6 flex items-center px-3 mb-[1px] rounded-lg  hover:bg-blue-700  justify-center place-items-center]">Contect </div></a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default NotFound;

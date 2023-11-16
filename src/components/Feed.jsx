import React, { useContext, useEffect } from 'react';
import { Context } from '../context/contextApi';
import LeftNav from './LeftNav';
import VideoCard from "./VideoCard";
import ErrorPage from './Errorpage';

// Feed component to display video feed
const Feed = () => {
    // Destructuring values from the context
    const { loading, searchResults, errorMsg } = useContext(Context);

    // useEffect to remove a custom class when the component mounts
    useEffect(() => {
        document.getElementById("root").classList.remove("custom-h");
    }, []);

    return (
        // Main container for the feed
        <div className='flex flex-row h-[calc(100%-56px)]'>
            {/* Left navigation component */}
            <LeftNav />
            {/* Video feed container */}
            <div className='grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black'>
                {/* Display error page if an error occurs */}
                {errorMsg.state && <ErrorPage errorMsg={errorMsg} />}
                {/* Display video cards if not loading */}
                {!loading && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4  p-5">
                        {/* Map through searchResults to render VideoCard for each item */}
                        {searchResults.map((item) => (
                            item?.id?.videoId ? (
                                <VideoCard key={item?.id?.videoId} video={item} />
                            ) : null
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Feed;

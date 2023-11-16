import React from 'react';
import { Link } from 'react-router-dom';


const VideoCard = ({ video }) => {

    return (
        <>
            <Link to={`/video/${video?.id?.videoId}`}>

                <div className='flex flex-col mb-6'>
                    <div className="relative h-48 md:h-40 md:rounded-xl overflow-hidden">
                        <img className='h-full w-full object-cover '
                            alt={video?.snippet?.title} src={video?.snippet?.thumbnails?.high?.url} />
                    </div>
                    <div className='text-white p-1 text-[12px] lg:text-[14px] xl:text-[15px]  font-semibold'>{video?.snippet?.title}</div>
                    <div className='text-white pl-1 text-[9px] lg:text-[10px] xl:text-[12px]  font-light'>{video?.snippet?.channelTitle}</div>
                </div>
            </Link>
        </>
    )
}

export default VideoCard


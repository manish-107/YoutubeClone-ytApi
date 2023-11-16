import React, { useContext, useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { abbreviateNumber } from 'js-abbreviation-number';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import ReactPlayer from 'react-player/youtube';
import { AiOutlineLike } from 'react-icons/ai';

import { fetchDataFromApi } from '../utils/api';
import { Context } from '../context/contextApi';
import SuggestionVideocard from './SuggestionVideocard';


const VideoDetails = () => {
    const [video, setVideo] = useState(null);
    const [relatedVideo, setRelatedVideo] = useState(null);
    const [channelId, setChannelId] = useState('');
    const [channeldetails, setChannelDetails] = useState(null);
    const { id } = useParams();
    const { setLoading, setErrorMsg } = useContext(Context);




    const fetchVideoDetails = useCallback(async () => {

        try {
            setLoading(true);
            const res = await fetchDataFromApi(`videos?part=snippet,statistics&id=${id}`);
            setVideo(res.items[0]);
            setChannelId(res?.items[0]?.snippet?.channelId);
        } catch (error) {
            console.error('Error fetching video details:', error);
            setErrorMsg({
                state: true,
                msg: error
            });
        } finally {
            setLoading(false);
        }
    }, [id, setLoading]);

    const fetchVideo = useCallback(async () => {
        try {
            setLoading(true);
            const res = await fetchDataFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`);
            setRelatedVideo(res.items);
        } catch (error) {
            console.error('Error fetching related video:', error);
        } finally {
            setLoading(false);
        }
    }, [id, setLoading]);

    const fetchChannel = useCallback(async () => {
        try {
            setLoading(true);
            const data = await fetchDataFromApi(`channels?part=snippet&id=${channelId}`);
            setChannelDetails(data?.items?.[0]);

        } catch (error) {
            console.error('Error fetching channel details:', error);
        } finally {
            setLoading(false);
        }
    }, [channelId, setLoading]);


    useEffect(() => {
        document.getElementById("root").classList.add("custom-h");

        const fetchData = async () => {
            await fetchVideo();
            await fetchVideoDetails();
            await fetchChannel();
        };

        fetchData();

    }, [fetchVideoDetails, fetchVideo, fetchChannel]);

    return (<div>
        <div className="flex justify-center flex-row  bg-black">

            <div className="w-full max-w-[1280px] flex flex-col ">
                <div className="flex flex-col  px-4 py-3 lg:py-6 overflow-y-visible">
                    <div className="h-[200px] md:h-[400px] lg:h-[400px] xl:h-[550px] ml-[-16px] lg:ml-0 mr-[-16px] lg:mr-0">
                        <ReactPlayer
                            url={`https://www.youtube.com/watch?v=${id}`}
                            controls
                            width="100%"
                            height="100%"
                            style={{ backgroundColor: "#000000" }}
                            playing={true}
                        />

                    </div>
                    <div className="text-white font-bold text-sm md:text-xl mt-4 line-clamp-2">
                        {video?.snippet?.title}


                    </div>
                    <div className="flex justify-between flex-col md:flex-row mt-4">
                        <div className="flex">
                            <div className="flex items-start">
                                <div className="flex h-11 w-11 rounded-full overflow-hidden">
                                    <img
                                        alt=''
                                        className="h-full w-full object-cover"
                                        src={channeldetails?.snippet?.thumbnails?.high?.url}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col ml-3">
                                <div className="text-white text-md font-semibold flex items-center">
                                    {video?.snippet?.channelTitle}
                                    {channeldetails?.statistics?.hiddenSubscriberCount ===
                                        false && (
                                            <BsFillCheckCircleFill className="text-white/[0.5] text-[12px] ml-1" />
                                        )}
                                </div>
                                <div className="text-white/[0.7] text-sm">
                                    {`${abbreviateNumber(
                                        channeldetails?.statistics?.subscriberCount,
                                        2
                                    )} subscribers`}

                                </div>
                            </div>
                        </div>
                        <div className="flex text-white mt-4 md:mt-0">
                            <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15]">
                                <AiOutlineLike className="text-xl text-white mr-2" />
                                {`${abbreviateNumber(
                                    video?.statistics?.likeCount,
                                    2
                                )} Likes`}
                            </div>
                            <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15] ml-4">
                                {`${abbreviateNumber(
                                    video?.statistics?.viewCount,
                                    2
                                )} Views`}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col py-6 px-4">
                    {relatedVideo?.map((item, index) => {


                        return (
                            <SuggestionVideocard
                                key={index}
                                video={item}
                                channeldetails={channeldetails}
                                videodetails={video}
                            />
                        );
                    })}
                </div>

            </div>
        </div>
    </div>)
};

export default VideoDetails;

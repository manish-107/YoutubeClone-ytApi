import React from "react";
import { abbreviateNumber } from "js-abbreviation-number";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

// SuggestionVideocard component for displaying video suggestions
const SuggestionVideocard = ({ video, channeldetails, videodetails }) => {
    return (
        <div>
            {/* Link to the video details page */}
            <Link to={`/video/${video?.id?.videoId}`}>
                <div className="flex mb-3">
                    {/* Video thumbnail container */}
                    <div className="relative h-24 lg:h-20 xl:h-24 w-40 min-w-[168px] lg:w-32 lg:min-w-[128px] xl:w-40 xl:min-w-[168px] rounded-xl bg-slate-800 overflow-hidden">
                        <img
                            alt=""
                            className="h-full w-full object-cover"
                            src={video?.snippet?.thumbnails?.high?.url}
                        />
                    </div>
                    {/* Video information container */}
                    <div className="flex flex-col ml-3 overflow-hidden">
                        {/* Video title */}
                        <span className="text-sm lg:text-xs xl:text-sm font-bold line-clamp-2 text-white">
                            {video?.snippet?.title}
                        </span>
                        {/* Channel details */}
                        <span className="text-[12px] lg:text-[10px] xl:text-[12px] font-semibold mt-2 text-white/[0.7] flex items-center">
                            {video?.snippet?.channelTitle}
                            {/* Display checkmark for verified channels */}
                            {channeldetails?.statistics?.hiddenSubscriberCount ===
                                false && (
                                    <BsFillCheckCircleFill className="text-white/[0.5] text-[12px] lg:text-[10px] xl:text-[12px] ml-1" />
                                )}
                        </span>
                        {/* Video views and published time */}
                        <div className="flex text-[12px] lg:text-[10px] xl:text-[12px] font-semibold text-white/[0.7] truncate overflow-hidden">
                            {/* Abbreviate the view count */}
                            <span>{`${abbreviateNumber(
                                videodetails?.statistics?.viewCount,
                                2
                            )} views`}</span>
                            {/* Separator */}
                            <span className="flex text-[24px] leading-none font-bold text-white/[0.7] relative top-[-10px] mx-1">
                                .
                            </span>
                            {/* Published time */}
                            <span className="truncate">
                                {video?.publishedTimeText}
                            </span>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default SuggestionVideocard;

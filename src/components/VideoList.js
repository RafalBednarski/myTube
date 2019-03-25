import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos, onVideoSelected}) => {
    const renderedList = videos.map((video)=> {
        return <VideoItem video={video} key={video.id.videoId} onVideoSelected={onVideoSelected}/>
    })
    return <div className="ui relaxed divided list">{renderedList}</div>
}

export default VideoList;
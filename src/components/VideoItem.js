import './VideoItem.css';
import React from 'react';

const VideoItem = ({video, onVideoSelected}) => {
    
    return (
        <div onClick={() => onVideoSelected(video)} className="video-item item">
            <img src={video.snippet.thumbnails.default.url} className="ui image" alt={video.snippet.title} />
             
            <div className="content">
                <a className="header" href={video.snippet.thumbnails.default.url}>{video.snippet.title}</a>
            </div>
        </div>
    )
}

export default VideoItem;
import React from 'react';
import VideoListItem from "./videoListItem";

const VideoList=(props)=>{
  
const videoItems=props.videos.map((video)=>{
    return (
            <VideoListItem
             onvideoselect={props.onvideoselect}
             key={video.etag}
             video={video} />
        );
});
    return(
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
} 

export default VideoList;

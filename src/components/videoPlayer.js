import React from 'react';

const VideoPlayer=({videos})=>{

    if(!videos)
    {
        return <div>Loading ...</div>
    }
    const videoId=videos.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`; 
    return(
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className="details">
                <div><br /><b><h3>{videos.snippet.title}</h3></b></div> 
                <div>{videos.snippet.description}</div>
            </div>
        </div>
    );
};

export default VideoPlayer;
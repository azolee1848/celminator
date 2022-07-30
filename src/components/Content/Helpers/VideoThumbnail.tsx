import React from 'react';
import {VideoThumbnailsProps} from "../../../Interfaces/VideoThumbnailsProps";

function VideoThumbnail(props:VideoThumbnailsProps) {

    return (
        <div className="videoThumbnailContainer">
            <div className="videoThumbnailImageContainer">
                <img onClick={()=>console.log("Hello world!")} src={require(props.imageUrl)} alt="" className="videoThumbnailImage"/>
            </div>
            <div className="videoThumbnailTitleContainer">
                <span className="videoThumbnailTitle">{props.title}</span>
            </div>
        </div>
    );
}

export default VideoThumbnail;
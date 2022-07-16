import React from 'react';
import VideoProps from "../../../Interfaces/VideoProps";

function Video(props: VideoProps) {

    const videoId: string = props.videoId;

    return (
        <>{ videoId &&
            <iframe width="560"
                    height="315"
                    src={"https://www.youtube.com/embed/" + videoId}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="videoMarginBottom"
            ></iframe>}
        </>
    );
}

export default Video;
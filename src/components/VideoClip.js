import React from 'react';

function VideoClip({ video }) {
    return (
        <div>
            <iframe 
                width='919'
                height='525'
                src={video.embedUrl}
                frameBorder='0'
                allowFullScreen
                title={video.title}
            />
            <br />
            <h1>{video.title}</h1>
            <p>{video.views} Views | Updated {video.createdAt}</p>
        </div>
    );
}

export default VideoClip;

{/* <div className="App">
<iframe
  width="919"
  height="525"
  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
  frameBorder="0"
  allowFullScreen
  title="Thinking in React"
/>
</div> */}
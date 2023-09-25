import video from "../data/video.js";
import VideoClip from './VideoClip';
import Votes from './Votes';
import Comments from './Comments';

function App() {
  console.log("Here's your data:", video);

  return (
    <div className='App'>
      <VideoClip video={video} />
      <Votes upVotes={video.upvotes} downVotes={video.downvotes} />
      <Comments comments={video.comments} />
    </div>
  );
}

export default App;



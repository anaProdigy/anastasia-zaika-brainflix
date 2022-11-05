import "./styles/App.scss";
import Header from "./components/Header/Header";

import Description from "./components/Description/Description";
import Comments from "./components/Comments/Comments";
import VideoInfo from "./components/VideoInfo/VideoInfo";

import { useState } from "react";
import getVideoDetails, { getVideos, convertTime } from "./utils/utils.jsx";

function App() {
  //default video, main video
  const [videoId, setVideoId] = useState(
    "84e96018-4022-434e-80bf-000ce4cd12b8"
  );
  const [videos, setVideos] = useState(getVideos(videoId));

  const [videoDetails, setVideoDetails] = useState(getVideoDetails(videoId));

  const handleClick = (clickEvnt, videoIdClickedOn) => {
    setVideoId(videoIdClickedOn);
    setVideos(getVideos(videoIdClickedOn));
    setVideoDetails(getVideoDetails(videoIdClickedOn));
  };

  return (
    <>
      <Header />
      
      <section>
        <Description videoDetails={videoDetails} />
        <Comments comments={videoDetails.comments} />
        <VideoInfo videos={videos} onClick={handleClick} />
      </section>
    </>
  );
}

export default App;

import Description from "../../components/Description/Description";
import Comments from "../../components/Comments/Comments";
import VideoInfo from "../../components/VideoInfo/VideoInfo";
import MainVideo from "../../components/MainVideo/MainVideo";
import "./home.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BASE_URL = `https://project-2-api.herokuapp.com?api_key=9fd729ba-02a3-4f19-9517-988d807bda11`;

function Home() {
  const [videoId, setVideoId] = useState(
    "84e96018-4022-434e-80bf-000ce4cd12b8"
  );
  const [videos, setVideos] = useState([]);
  const [videoDetails, setVideoDetails] = useState({});
  const { params } = useParams();
  
  const handleVideoChange = (videoId) => {
    setVideoId(videoId);
    //   setVideos(getVideos(videoIdClickedOn));
    //   setVideoDetails(getVideoDetails(videoIdClickedOn));
  };

  useEffect(() => {
    axios
      .get(
        "https://project-2-api.herokuapp.com/videos?api_key=9fd729ba-02a3-4f19-9517-988d807bda11"
      )
      .then((response) => {
        //console.log(response);
        //console.log(response.data)
        //setVideos(response.data);

        setVideos(
          response.data
            .filter((video) => video.id !== videoId)
            .map((video) => {
              const { id, image, title, channel } = video;
              return {
                id,
                image,
                title,
                channel,
              };
            })
        );
      })
      .catch((error) => console.log(error));

    axios
      .get(
        "https://project-2-api.herokuapp.com/videos/84e96018-4022-434e-80bf-000ce4cd12b8?api_key=9fd729ba-02a3-4f19-9517-988d807bda11"
      )
      .then((response) => {
        //console.log("Data", response);

        setVideoDetails(response.data);
        //console.log("videoDetails", videoDetails);
      });
  }, []);

  return (
    <div>
      <MainVideo videoDetails={videoDetails && videoDetails} />
      <section className="wrap">
        <section className="wrap__left">
          <Description videoDetails={videoDetails && videoDetails} />
          <Comments
            comments={videoDetails?.comments && videoDetails?.comments}
            videoDetails={videoDetails && videoDetails}
          />
        </section>
        <VideoInfo videos={videos && videos} />
      </section>
    </div>
  );
}

export default Home;

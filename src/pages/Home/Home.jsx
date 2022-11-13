import Description from "../../components/Description/Description";
import Comments from "../../components/Comments/Comments";
import VideoInfo from "../../components/VideoInfo/VideoInfo";
import MainVideo from "../../components/MainVideo/MainVideo";
import "./home.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


function Home() {
  
  const [videos, setVideos] = useState([]);
  const [videoDetails, setVideoDetails] = useState({});
  const { videoId } = useParams();


  useEffect(() => {
    axios
      .get(
        "https://project-2-api.herokuapp.com/videos?api_key=9fd729ba-02a3-4f19-9517-988d807bda11"
      )
      .then((response) => {
        setVideos(response.data);
      })
      .catch((error) => console.log(error));

    const id = videoId || "84e96018-4022-434e-80bf-000ce4cd12b8";

    axios
      .get(
        `https://project-2-api.herokuapp.com/videos/${id}?api_key=9fd729ba-02a3-4f19-9517-988d807bda11`
      )
      .then((response) => {
        //console.log("Data", response);

        setVideoDetails(response.data);
        //console.log("videoDetails", videoDetails);
      });
  }, [videoId]);

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
        <VideoInfo
          videos={videos && videos}
          videoDetails={videoDetails && videoDetails}
        />
      </section>
    </div>
  );
}

export default Home;

import bfVideos from "../data/videos.json";
import bfVideoDetails from "../data/video-details.json";



export const getVideos = (videoId) => {
  return bfVideos.filter((video) => video.id !== videoId);
};

const getVideoDetails = (videoId) => {
  return bfVideoDetails.find((video) => video.id === videoId);
};


export default getVideoDetails;
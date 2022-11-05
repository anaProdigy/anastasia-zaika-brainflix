import bfVideos from "../data/videos.json";
import bfVideoDetails from "../data/video-details.json";



export const getVideos = (videoId) => {
  return bfVideos.filter((video) => video.id !== videoId);
};

const getVideoDetails = (videoId) => {
  return bfVideoDetails.find((video) => video.id === videoId);
};

// create a fn that returns ts directly , fn that  returns time


export const convertTime = (timeStamp) => {
    return new Date(timeStamp).toLocaleDateString();
};


export default getVideoDetails;
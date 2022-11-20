import "./mainVideo.scss";

function MainVideo({ videoDetails }) {
  const { image, video } = videoDetails;

  return (
    <div className="description-one__poster">
      <video
        control="controls"
        className="description-one__poster-img"
        controls
        poster={`http://localhost:8080/${image}`}
        src={`http://localhost:8080/${video}`}
      ></video>
    </div>
  );
}

export default MainVideo;

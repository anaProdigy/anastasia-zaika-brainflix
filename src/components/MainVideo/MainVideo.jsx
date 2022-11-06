import "./mainVideo.scss";

function MainVideo({ videoDetails }) {
  const { image, ...rest } = videoDetails;

  return (
    <div className="description-one__poster">
      <video
        control="controls"
        src="true"
        className="description-one__poster-img"
        controls
        poster={image}
      ></video>
    </div>
  );
}

export default MainVideo;

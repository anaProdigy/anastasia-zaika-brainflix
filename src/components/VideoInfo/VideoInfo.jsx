import "./videoInfo.scss";

function VideoInfo(props) {
  return (
    <div className="video-info">
     

      <h2 className="video-info__text">NEXT VIDEOS</h2>
      <aside className="video-info__holder">
        {props.videos.map((video) => (
          <div className="video-info__cards" key={video.name + video.id}>
            <img
              src={video.image}
              alt={video.title}
              className="video-info__avatar"
              onClick={(clickEvnt) => props.onClick(clickEvnt, video.id)}
            />
            <div className="video-info__title-channel">
              <div className="video-info__cards-title">{video.title}</div>
              <div className="video-info__cards-channel">{video.channel}</div>
            </div>
          </div>
        ))}
      </aside>
    </div>
  );
}

export default VideoInfo;

import "./description.scss";
import SimpleDateTime from "react-simple-timestamp-to-date";
import Views from "../../assets/images/Icons/views.svg";
import Likes from "../../assets/images/Icons/likes.svg";
import { convertTime } from "../../utils/utils.jsx";

function Description({ videoDetails }) {
  const {
    title,
    channel,
    image,
    description,
    views,
    likes,
    timestamp,
    ...rest
  } = videoDetails;
  return (
    <section className="description">
      <section className="description-one">
        <div className="description-one__poster">
          <video
            control="controls"
            src="true"
            className="description-one__poster-img"
            controls
            poster={image}
          ></video>
        </div>
        <h1 className="description-one__title">{title}</h1>
        <div className="description-one__num-text">
          <div className="description-one__num">
            <div className="description-one__num-date">
              <div className="description-one__num-channel">By {channel}</div>

              <div className="description__timestamp">
                {convertTime(timestamp)}
              </div>
            </div>
            <div className="description-one__num-likes">
              <div className="description__views-text">
                <img className="description__views" src={Views} />
                {views}
              </div>
              <div className="description__likes-text">
                <img className="description__likes" src={Likes} />
                {likes}
              </div>
            </div>
          </div>
          <p className="description-one__text">{description}</p>
        </div>

        <div></div>
      </section>
    </section>
  );
}

export default Description;

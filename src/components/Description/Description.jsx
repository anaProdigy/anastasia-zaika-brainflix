import "./description.scss";


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
          <video className="description-one__poster-img" poster={image}></video>
        </div>
        <h1 className="description-one__title">{title}</h1>
        <div className="description-one__num-text">
          <div className="description-one__num">
            <div>
              <p>{channel}</p>
              <div>{timestamp}</div>
            </div>
            <div>
              <div>{views}</div>
              <div>{likes}</div>
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

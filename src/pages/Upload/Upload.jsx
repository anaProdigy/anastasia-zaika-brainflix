import "./upload.scss";
import Bike from "../../assets/images/Upload-video-preview.jpg";
import { Link, useNavigate  } from "react-router-dom";


import axios from "axios";

function Upload() {

  const navigate = useNavigate()
  const postVideo = (event) => {
    event.preventDefault();

    const error = () => {
      alert("enter the title of your video");
    };

    const title = event.target.title.value;
    if (!title) {
      error();
      return;
    }

    const description = event.target.description.value;
    if (!description) {
      error();
      return;
    }

    axios
      .post("http://localhost:8080/videos/", {
        title: title,
        description: description,
      })
      .then((postVideo) => {
navigate("/")
        //event.target.reset();
      });
  };

  return (
    <div className="upload">
      <h1 className="upload__title">Upload Video</h1>

      <div className="upload__wrap">
        <div className="upload__img">
          <h2 className="upload__img-text">VIDEO THUMBNAIL</h2>
          <img className="upload__avatar" src={Bike} alt="bike" />
        </div>

        <form
          className="upload__form"
          id="upload__form-item"
          onSubmit={postVideo}
        >
          <div className="upload__form-labl-one">
            <label htmlFor="title" className="upload__form-name">
              TITLE YOUR VIDEO
            </label>

            <textarea
              className="upload__form-input"
              type="text"
              name="title"
              placeholder="Add a title to your video"
            />
          </div>
          <div className="upload__form-labl-one">
            <label htmlFor="description" className="upload__form-name">
              ADD A VIDEO DESCRIPTION
            </label>

            <textarea
              type="text"
              name="description"
              className="upload__form-text"
              placeholder="Add a description to your video"
            />
          </div>
          <div className="upload__form-btns">
            <button type="submit" className="upload__form-publish">
              Publish
              {/* <Link className="upload__btn-link" to="/publish">
            PUBLISH
          </Link> */}
            </button>

            <button className="upload__form-cancel">CANCEL</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Upload;

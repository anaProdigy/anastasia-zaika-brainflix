import "./upload.scss";
import Bike from "../../assets/images/Upload-video-preview.jpg";
import { Link } from "react-router-dom";


function Upload() {
  return (
    <div className="upload">
      <h1 className="upload__title">Upload Video</h1>

      <div className="upload__wrap">
        <div className="upload__img">
          <h2 className="upload__img-text">VIDEO THUMBNAIL</h2>
          <img className="upload__avatar" src={Bike} alt="bike" />
        </div>

        <form className="upload__form">
          <div className="upload__form-labl-one">
            <h2 className="upload__form-name"> TITLE YOUR VIDEO</h2>

            <textarea
              className="upload__form-input"
              type="text"
              name="title"
              placeholder="Add a title to your video"
            />
          </div>
          <div className="upload__form-labl-one">
            <h2 className="upload__form-name">ADD A VIDEO DESCRIPTION</h2>

            <textarea
              className="upload__form-text"
              placeholder="Add a description to your video"
            />
          </div>
        </form>
      </div>

      <div className="upload__form-btns">
        <button className="upload__form-publish">
          <Link className="upload__btn-link" to="/publish">
            PUBLISH
          </Link>
        </button>

        <button className="upload__form-cancel">CANCEL</button>
      </div>
    </div>
  );
}




export default Upload;
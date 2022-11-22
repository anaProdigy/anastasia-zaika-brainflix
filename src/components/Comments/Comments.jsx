import "./comments.scss";
import React from 'react';
import Avatar from "../../assets/images/Mohan-muruge.jpg";
import {convertTime } from "../../utils/utils.jsx"
import axios from "axios";




function Comments({comments, videoId}) {
  console.log(videoId)
  
  const clickComment = (e) => {
    e.preventDefault();

    axios.post(
`http://localhost:8080/videos/${videoId}/comments`, {comment:e.target.comment.value, name:e.target.name.value}
    )
console.log("clickComment")
  }

  
  return (
    <>
      <section className="comments">
        <h1 className="comments__amount">{comments?.length} Comments</h1>
        <h2 className="comments__title">JOIN THE CONVERSATION</h2>

        <div className="comments__holder">
          <img className="comments__avatar" src={Avatar} alt="user avatar" />

          <form
            className="comments__form"
            onSubmit={(event) => clickComment(event)}
          >
            <textarea
              name="name"
              className="comments__form-input"
              placeholder="Add a new name"
            ></textarea>
            <textarea
              name="comment"
              className="comments__form-input"
              placeholder="Add a new comment"
            ></textarea>
            <button className="comments__form-btn">COMMENT</button>
          </form>
        </div>

        {comments?.map((comment) => (
          <section className="comments__container" key={comment.name}>
            <div className="comments__image"></div>
            <div className="comments__container-box">
              <div className="comments__name-time">
                <div className="comments__name">{comment.name}</div>
                <div className="comments__time">
                  {convertTime(comment.timestamp)}
                </div>
              </div>
              <div className="comments__comment">{comment.comment}</div>
            </div>
          </section>
        ))}
      </section>
    </>
  );
}


export default Comments;

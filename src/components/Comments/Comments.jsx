import "./comments.scss";
import React from 'react';
import Button from "../../assets/images/Icons/add_comment.svg";
import Avatar from "../../assets/images/Mohan-muruge.jpg";

import SimpleDateTime from 'react-simple-timestamp-to-date';


function Comments({comments}) {
  return (
    <section className="comments">
      <h1 className="comments__amount">3 Comments</h1>
      <h2 className="comments__title">JOIN THE CONVERSATION</h2>

      <div className="comments__holder">
        <img className="comments__avatar" src={Avatar} alt="user image" />

        <form className="comments__form">
          <input
            className="comments__form-input"
            placeholder="Add a new comment"
          ></input>
          <button className="comments__form-btn">
            <img className="comments__form-img" src={Button}></img>comment{" "}
          </button>
        </form>
      </div>

      {comments.map((comment) => (
        <section className="comments__container" key={comment.name}>
          <div className="comments__name-time">
            <h3 className="comments__name">{comment.name}</h3>
            <SimpleDateTime
              dateFormat="DMY"
              dateSeparator="/"
              showTime="0"
              className="comments__timestamp"
            >
              {comment.timestamp}
            </SimpleDateTime>
          </div>
          <p className="comments__comment">{comment.comment}</p>
        </section>
      ))}
    </section>
  );
}


export default Comments;

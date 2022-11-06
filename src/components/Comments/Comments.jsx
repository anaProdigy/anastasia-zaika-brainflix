import "./comments.scss";
import React from 'react';
import Button from "../../assets/images/Icons/add_comment.svg";
import Avatar from "../../assets/images/Mohan-muruge.jpg";
import {convertTime } from "../../utils/utils.jsx"




function Comments({comments}) {
  
  return (
    <section className="comments">
      <h1 className="comments__amount">
        {comments.length} Comments
        {/* display number of elements in the arrey .length */}
      </h1>
      <h2 className="comments__title">JOIN THE CONVERSATION</h2>

      <div className="comments__holder">
        <img className="comments__avatar" src={Avatar} alt="user avatar" />

        <form className="comments__form">
          <textarea
            className="comments__form-input"
            placeholder="Add a new comment"
          ></textarea>
          <button className="comments__form-btn">
            <img className="comments__form-img" src={Button} alt="button icon"></img>COMMENT
          </button>
        </form>
      </div>

      {comments.map((comment) => (
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
  );
}


export default Comments;

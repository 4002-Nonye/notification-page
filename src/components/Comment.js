import React, { useState } from "react";
import Data from "./Data";
import Header from "./Header";

const Comment = () => {
  const [notification, setNotification] = useState(3);

  const renderedData = Data.map(
    ({
      key,
      imgSrc,
      alt,
      name,
      action,
      postName,
      classActive,
      time,
      subtext,
      chessImgSrc,
      club,
    }) => {
      return (
        <div
          className={`container ${
            classActive && notification ? "notified" : ""
          }`}
          key={key}
        >
          <div className="sort">
            <div>
              <img src={imgSrc} alt={alt} className="avatar"></img>
            </div>
            <div className="comments">
              <p
                className={`comment-details ${
                  classActive && notification ? "active" : ""
                }`}
              >
                <span className="name">{name} </span>
                <span className="action"> {action} </span>
             <span>   {postName ? (
                  <span className="post-name">{postName}</span>
                ) : (
                  <span className="club">{club}</span>
                )}</span>
                <span className="active"></span>
              
              </p>
              <div>
                <p className="time">{time}</p>
                {subtext ? <p className="subtext">{subtext}</p> : null}
              </div>
            </div>
          </div>
          {chessImgSrc ? (
            <div>
              <img src={chessImgSrc} alt={alt} className="chess"></img>
            </div>
          ) : null}
        </div>
      );
    }
  );
  return (
    <div>
      {/* UPDATE NOTIFICATION BAR */}
      <Header
        title="Notifications"
        changeNotification={setNotification}
        notify={notification}
      />
      <main>{renderedData}</main>
    </div>
  );
};
export default Comment;

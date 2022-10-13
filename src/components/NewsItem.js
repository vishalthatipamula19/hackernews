import React, { useState } from "react";
import "./NewsItem.css";

const NewsItem = ({ title, text, url, id }) => {
  const [click, setClick] = useState(false);
  return (
    <div
      id={id}
      className="item-card"
      onClick={() => {
        setClick(!click);
      }}
    >
      <div className="title">{title}</div>
      {click ? <div className="text">{text}</div> : null}
    </div>
  );
};

export default NewsItem;

import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getNewsIds, getNews } from "../../redux/Actions";
import NewsItem from "../../components/NewsItem";
import "./NewsPage.css";

const NewsPage = () => {
  const dispatch = useDispatch();
  const newsIds = useSelector((store) => store.newsReducer.newsId);
  const news = useSelector((store) => store.newsReducer.news);
  useEffect(() => {
    if (newsIds.length === 0) {
      getId();
    }
    if (newsIds.length !== 0) {
      getNewsFunction();
    }
  }, [newsIds]);

  const getId = async () => {
    try {
      const response = await axios.get(
        "https://hacker-news.firebaseio.com/v0/topstories.json"
      );

      dispatch(getNewsIds(response.data));
    } catch (error) {
      console.log(error);
    }
  };

  const sliceIdArray = newsIds.slice(news.length, 10 + news.length);
  const getNewsFunction = async () => {
    for (let i = 0; i < sliceIdArray.length; i++) {
      console.log(i);
      const response = await axios.get(
        `https://hacker-news.firebaseio.com/v0/item/${sliceIdArray[i]}.json`
      );

      dispatch(getNews(response.data));
    }
  };

  const bottomElementRef = useRef();

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((data) => {
      setIsVisible(data[0].isIntersecting);
    });

    observer.observe(bottomElementRef.current);
  }, []);

  useEffect(() => {
    if (isVisible) {
      getNewsFunction();
    }
  }, [isVisible]);

  return (
    <div className="page-card">
      {news.map((item, index) => {
        return (
          <div className="item-parent">
            <NewsItem
              title={item.title}
              text={item.text}
              url={item.url}
              id={item.id}
            />
          </div>
        );
      })}
      <div ref={bottomElementRef} />
    </div>
  );
};

export default NewsPage;

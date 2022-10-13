const getNewsIds = (response) => {
  return {
    type: "GET_NEWS_IDS",
    payload: response
  };
};

const getNews = (response) => {
  return {
    type: "GET_NEWS",
    payload: response
  };
};

export { getNewsIds };
export { getNews };

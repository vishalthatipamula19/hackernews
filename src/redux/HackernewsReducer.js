const initialState = {
  newsId: [],
  news: []
};

const HackernewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_NEWS_IDS":
      return { ...state, newsId: [...state.newsId, ...action.payload] };
    case "GET_NEWS":
      return { ...state, news: [...state.news, action.payload] };
    default:
      return state;
  }
};

export default HackernewsReducer;

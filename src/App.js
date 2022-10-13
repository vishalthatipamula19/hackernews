import "./styles.css";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/Store";

import NewsPage from "./pages/newspage/NewsPage";

export default function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <NewsPage />
      </Provider>
    </div>
  );
}

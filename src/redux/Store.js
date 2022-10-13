import { createStore, combineReducers } from "redux";
import HackernewsReducer from "./HackernewsReducer";

const store = createStore(
  combineReducers({
    newsReducer: HackernewsReducer
  })
);

export { store };

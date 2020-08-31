import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { test } from "./test";

const createRootReducer = (history: any) =>
  combineReducers({
    router: connectRouter(history),
    test
  });

export default createRootReducer;

import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { RouteComponentProps } from "react-router";
import { test } from "./test";

const createRootReducer = (history: RouteComponentProps) =>
  combineReducers({
    router: connectRouter(history),
    test
  });

export default createRootReducer;

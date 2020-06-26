import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import jokes from './jokes'

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    jokes
  });

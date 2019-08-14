import { routerReducer } from "react-router-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import Reducers from "./reducers/index";

const reducers = combineReducers({
  FetchProp: Reducers.r_Fetch,

  CreateProp: Reducers.r_Create,
  UpdateProp: Reducers.r_Update,
  DeleteProp: Reducers.r_Delete,
  routing: routerReducer
});

//middlewares
const logHandler = store => next => action => {
  next(action); //run next action
};
const errorHandler = store => next => action => {
  try {
    next(action);
  } catch (e) {
    console.log("Error! : ", e);
  }
};

let middlewares = applyMiddleware(thunk);
let store = createStore(reducers, middlewares);
middlewares = applyMiddleware(
  logHandler,
  errorHandler,
  thunk,
  createLogger()
);
store = createStore(reducers, composeWithDevTools(middlewares));

export default store;

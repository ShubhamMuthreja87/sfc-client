import {
  configureStore,
  combineReducers,
} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { watcherSaga } from "./sagas/rootSaga";
import userReducer from "./ducks/userSlice";

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  user: userReducer,
});

const store = configureStore({
  reducer,
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(watcherSaga);

export default store;

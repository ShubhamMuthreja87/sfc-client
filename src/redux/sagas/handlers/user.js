import { call, put } from "redux-saga/effects";
import { setUser } from "../../ducks/userSlice";
import { requestGetUser } from "../requests/user";

export function* handleGetUser(action) {
  try {
    const response = yield call(requestGetUser,action.payload);
    console.log(response);
    if(response.data!=null){
      yield put(setUser( response.data));
    }
  } catch (error) {
    console.log(error);
  }
}

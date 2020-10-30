import {combineReducers} from "redux";
import {appSlice} from "@store/slices/appSlice";
import {chatSlice} from "@store/slices/chatSlice";

const rootReducer = combineReducers({
  app: appSlice.reducer,
  chat: chatSlice.reducer
});

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;

import {combineReducers} from "redux";
import {appSlice} from "@store/slices/appSlice";
import {chatSlice} from "@store/slices/chatSlice";
import {infoSlice} from '@store/slices/infoSlice';

const rootReducer = combineReducers({
  app: appSlice.reducer,
  chat: chatSlice.reducer,
  info: infoSlice.reducer
});

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;

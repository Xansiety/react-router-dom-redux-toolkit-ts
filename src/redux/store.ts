import { configureStore } from "@reduxjs/toolkit";
import { UserInfo } from "../models";
import userSliceReducer from "./states/user";

export interface AppStore {
  user: UserInfo;
}

export const store = configureStore<AppStore>({
  reducer: {
    user: userSliceReducer,
  },
});

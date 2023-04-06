import { createSlice } from "@reduxjs/toolkit";
import { clearItemLocalStorage, persistItemLocalStorage } from "../../helpers";
import { UserInfo } from "../../models";

export const EmptyUserState: UserInfo = {
  id: 0,
  name: "",
  email: "",
};
 
export const UserKey = 'user';

export const userSlice = createSlice({
  name: "user",
  initialState: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') as string) : EmptyUserState,
  reducers: {
    createUser: (state, action) => { 
      persistItemLocalStorage<UserInfo>(UserKey, action.payload);
      return  action.payload;
    },
    updateUser: (state, action) =>  {
      const result = {...state, ...action.payload}; 
      persistItemLocalStorage<UserInfo>(UserKey,  result);
      return result;
    },
    resetUser: () => {
      clearItemLocalStorage(UserKey);
      return EmptyUserState;
    },
  },
});

export const { createUser, updateUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
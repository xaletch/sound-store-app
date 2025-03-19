import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserData } from "../types";

export interface UserState {
  user: UserData | null;
}

const initialState: UserState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserData>) => {
      state.user = action.payload
    }
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
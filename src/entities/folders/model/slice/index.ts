import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PackData } from "../types";

export interface FoldersState {
  popularPack:  PackData[] | null;
}

const initialState: FoldersState = {
  popularPack: [],
};

export const foldersSlice = createSlice({
  name: "folders",
  initialState,
  reducers: {
    setPopularPack: (state, action: PayloadAction<PackData[]>) => {
      state.popularPack = action.payload;
    },
  },
});

export const { setPopularPack } = foldersSlice.actions;
export default foldersSlice.reducer;
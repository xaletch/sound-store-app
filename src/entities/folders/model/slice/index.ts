import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PackData } from "../types";

export interface FoldersState {
  popularPack:  PackData[] | null;
  folders: PackData[] | null
}

const initialState: FoldersState = {
  popularPack: [],
  folders: [],
};

export const foldersSlice = createSlice({
  name: "folders",
  initialState,
  reducers: {
    setPopularPack: (state, action: PayloadAction<PackData[]>) => {
      state.popularPack = action.payload;
    },
    setFolders: (state, action: PayloadAction<PackData[]>) => {
      state.folders = action.payload
    }
  },
});

export const { setPopularPack, setFolders } = foldersSlice.actions;
export default foldersSlice.reducer;
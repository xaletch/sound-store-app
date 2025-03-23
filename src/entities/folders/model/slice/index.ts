import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PackData } from "../types";

export interface FoldersState {
  popularPack:  PackData[] | null;
  folders: PackData[] | [];
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
    setFolders: (state, action: PayloadAction<{ folders: PackData[]; replace?: boolean }>) => {
      const { folders, replace } = action.payload;
    
      if (folders.length === 0) return;
    
      if (replace) {
        state.folders = folders;
        return;
      }
    
      if (!state.folders) {
        state.folders = folders;
        return;
      }
    
      const newFolders = folders.filter(
        (newFolder) => !state.folders.some((existingFolder) => existingFolder.Id === newFolder.Id)
      );
    
      if (newFolders.length > 0) {
        state.folders = [...state.folders, ...newFolders];
      }
    },
  },
});

export const { setPopularPack, setFolders } = foldersSlice.actions;
export default foldersSlice.reducer;
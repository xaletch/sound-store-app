import { TracksData } from "@/entities/sound/model/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface LovedState {
  lovedTracks: TracksData[] | [], 
}

const initialState: LovedState = {
  lovedTracks: [],
};

export const lovedSlice = createSlice({
  name: "loved",
  initialState,
  reducers: {
    setLovedTracks: (state, action: PayloadAction<TracksData[]>) => {
      state.lovedTracks = action.payload
    }
  },
});

export const { setLovedTracks } = lovedSlice.actions;
export default lovedSlice.reducer;
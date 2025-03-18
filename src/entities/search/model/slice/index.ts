import { TracksData } from "@/entities/sound/model/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SearchTracksState {
  tracks: TracksData[] | [];
  currentPage: number;
}

const initialState: SearchTracksState = {
  tracks: [],
  currentPage: 1
};

export const searchTracksSlice = createSlice({
  name: "search_tracks_slice",
  initialState,
  reducers: {
    setTracks: (state, action: PayloadAction<TracksData[]>) => {
      state.tracks = [...state.tracks, ...action.payload];
    },
    nextPage: (state) => {
      state.currentPage += 1;
    }
  },
});

export const { setTracks, nextPage } = searchTracksSlice.actions;
export default searchTracksSlice.reducer;
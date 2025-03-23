import { TracksData } from "@/entities/sound/model/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface tracksState {
  tracks: TracksData[] | null;
  currentPage: number;
}

const initialState: tracksState = {
  tracks: null,
  currentPage: 1
};

export const tracksSlice = createSlice({
  name: "tracks_slice",
  initialState,
  reducers: {
    setTracks: (state, action: PayloadAction<{ tracks: TracksData[]; replace?: boolean }>) => {
      const { tracks, replace } = action.payload;
    
      if (replace) {
        state.tracks = tracks;
      } else {
        const newTracks = tracks.filter(
          (newTrack) => !(state.tracks || []).some((existingTrack) => existingTrack.Id === newTrack.Id)
        );
        if (newTracks.length > 0) {
          state.tracks = [...(state.tracks || []), ...newTracks];
        }
      }
    },
    nextPage: (state) => {
      state.currentPage += 1;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload
    }
  },
});

export const { setTracks, nextPage, setCurrentPage } = tracksSlice.actions;
export default tracksSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

import { CattleList } from "src/types";

// Define a type for the slice state
interface TimelineState {
  cattleList: CattleList;
}

// Define the initial state using that type
const initialState: TimelineState = {
  cattleList: [],
};

export const timelineSlice = createSlice({
  name: "timeline",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    loadCattles: (state, action: PayloadAction<CattleList>) => {
      state.cattleList = action.payload;
    },
  },
});

export const { loadCattles } = timelineSlice.actions;

export const selectCattles = (state: RootState) => state.timeline.cattleList;

export default timelineSlice.reducer;

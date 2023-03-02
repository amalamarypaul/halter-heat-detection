import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import type { RootState } from "./store";

import { CattleList } from "src/types";
import { getCattles } from "src/apis/timeline";

// Define a type for the slice state
interface TimelineState {
  cattleList: CattleList;
  loading: boolean;
}

// Define the initial state using that type
const initialState: TimelineState = {
  cattleList: [],
  loading: false,
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
  extraReducers: (builder) => {
    builder.addCase(getCattles.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCattles.fulfilled, (state, { payload }) => {
      state.cattleList = payload.cattles;
    });
    builder.addCase(getCattles.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const { loadCattles } = timelineSlice.actions;

export const selectCattles = (state: RootState) => state.timeline.cattleList;

export default timelineSlice.reducer;

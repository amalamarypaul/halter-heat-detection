import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import type { RootState } from "./store";

import { Cattle, CattleList, StatisticsData } from "src/types";
import { getCattles, getCattlesStats } from "src/apis/timeline";

// Define a type for the slice state
interface TimelineState {
  cattleList: CattleList;
  loading: boolean;
  statsData: StatisticsData;
  selectedCow: Cattle | null;
}

// Define the initial state using that type
const initialState: TimelineState = {
  cattleList: [],
  loading: false,
  statsData: { cowsCycled: "", cowsNotCycled: null },
  selectedCow: null,
};

export const timelineSlice = createSlice({
  name: "timeline",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    selectCow: (state, action: PayloadAction<Cattle | null>) => {
      state.selectedCow = action.payload;
    },
    updateCow: (state, action: PayloadAction<Cattle>) => {
      state.loading = true;
      state.cattleList = state.cattleList.map((cow) => {
        if (cow.id === action.payload.id) {
          return action.payload;
        }
        return cow;
      });
      state.selectedCow = null;
    },
    finishLoading: (state, action: PayloadAction) => {
      state.loading = false;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getCattles.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCattles.fulfilled, (state, { payload }) => {
      state.cattleList = payload.cattles;
      state.loading = false;
    });
    builder.addCase(getCattles.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(getCattlesStats.fulfilled, (state, { payload }) => {
      state.statsData = payload.stats;
    });
  },
});

export const { selectCow, updateCow, finishLoading } = timelineSlice.actions;

export const selectCattles = (state: RootState) => state.timeline.cattleList;

export default timelineSlice.reducer;

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getCattles = createAsyncThunk("timeline/getCattles", async (thunkAPI) => {
  const res = await axios("/api/cattles").then((data) => data);
  return res.data;
});
const getCattlesStats = createAsyncThunk(
  "timeline/getCattlesStats",
  async (thunkAPI) => {
    const res = await axios("/api/cattles/stats").then((data) => data);
    return res.data;
  }
);
export { getCattles, getCattlesStats };

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { options } from "../utils/Fetch";
const base_url = "https://youtube-v31.p.rapidapi.com";
const initialState = {
  videoDetails: {},
  isLoading: false,
  relatedVideos: [],
};
export const getVideoDetails = createAsyncThunk(
  "redux/getVideoDetails",
  async (url) => {
    try {
      const { data } = await axios.get(`${base_url}/${url}`, options);
      return data.items[0];
    } catch (error) {
      console.log("error in getVideoDetails thunk");
    }
  }
);
export const getRelatedVideos = createAsyncThunk(
  "redux/getRelatedVideos",
  async (url) => {
    try {
      const { data } = await axios.get(`${base_url}/${url}`, options);
      return data.items;
    } catch (error) {
      console.log("error in getRelatedVideos thunk");
    }
  }
);
const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getVideoDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getVideoDetails.fulfilled, (state, { payload }) => {
        state.videoDetails = payload;
        state.isLoading = false;
      })
      .addCase(getVideoDetails.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getRelatedVideos.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRelatedVideos.fulfilled, (state, { payload }) => {
        state.relatedVideos = payload;
        state.isLoading = false;
      })
      .addCase(getRelatedVideos.rejected, (state) => {
        state.isLoading = false;
      });
  },
});
export default videoSlice.reducer;
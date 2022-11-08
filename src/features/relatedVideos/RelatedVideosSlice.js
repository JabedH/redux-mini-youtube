import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRelatedVideos } from "./RelatedVideosAPI";

const initialState = {
    relatedVideos: [],
    isLoading: false,
    isError: false,
    error: "",
};

// async thunk
export const fetchRelatedVideos = createAsyncThunk("RelatedVideos/fetchRelatedVideos", async ({tags, id}) => {
  const relatedVideos = await getRelatedVideos({tags,id});
  return relatedVideos;
});

const RelatedVideoSlice = createSlice({
  name: "relatedVideos",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchRelatedVideos.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchRelatedVideos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.relatedVideos = action.payload;
      })
      .addCase(fetchRelatedVideos.rejected, (state, action) => {
        state.isLoading = false;
        state.relatedVideos = [];
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});
export default RelatedVideoSlice.reducer;

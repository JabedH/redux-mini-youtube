import { configureStore } from "@reduxjs/toolkit";
import videosReducer from "../features/videos/videosSlice";
import videoReducer from "../features/video/VideoSlice";
import tagsReducer from "../features/Tags/tagsSlice";
import relatedVideosReducer from "../features/relatedVideos/RelatedVideosSlice";
import filterReducer from '../features/filter/filterSlice'
export const store = configureStore({
  reducer: {
    videos: videosReducer,
    video: videoReducer,
    tags: tagsReducer,
    relatedVideos: relatedVideosReducer,
    filter: filterReducer,
  },
});

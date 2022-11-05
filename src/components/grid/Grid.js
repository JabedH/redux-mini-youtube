import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchVideos } from "../../features/videos/videosSlice";

import Loading from "../Loading/Loading";
import VideoGrid from "./VideoGrid";

const Grid = () => {
  const dispatch = useDispatch();
  const { isLoading, isError, error, videos } = useSelector(
    (state) => state.videos
  );
  useEffect(() => {
    dispatch(fetchVideos());
  }, [dispatch]);

  let content;
  if (isLoading) content = <Loading />;
  if (!isLoading && isError) content = <div class="col-span-12">{error}</div>;
  if (!isError && !isLoading && videos.length === 0) {
    content = <div class="col-span-12">No videos Found</div>;
  }
  if (!isError && !isLoading && videos.length > 0) {
    content = videos.map((video) => <VideoGrid key={video.id} video={video} />);
  }
  return (
    // <!-- Video Grid -->
    <section class="pt-12">
      <section class="pt-12">
        <div class="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
          {/* <!-- single video --> */}
          {content}
          {/* <div class="col-span-12">some error happened</div> */}
        </div>
      </section>
    </section>
  );
};

export default Grid;

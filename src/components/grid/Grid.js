import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchVideos } from "../../features/videos/videosSlice";

import Loading from "../Loading/Loading";
import Pagination from "../pagination/Pagination";
import VideoGrid from "./VideoGrid";

const Grid = () => {
  const dispatch = useDispatch();
  const { isLoading, isError, error, videos } = useSelector(
    (state) => state.videos
  );
  const [currentPage, setCurrentPages]= useState(1)
  const [postPerPage, setPostPerPage]= useState(8)
  
  // get current posts
  const indexOfLastPost = currentPage * postPerPage
  const indexOfFirstPost =indexOfLastPost - postPerPage
  const currentVideos= videos.slice(indexOfFirstPost,indexOfLastPost)

  const paginate = pageNumber => setCurrentPages(pageNumber)

  const { tags, search } = useSelector((state) => state.filter);
  useEffect(() => {
    dispatch(fetchVideos({ tags, search }));
}, [dispatch, tags, search]);

  let content;
  if (isLoading) content = <Loading />;
  if (!isLoading && isError) content = <div class="col-span-12">{error}</div>;
  if (!isError && !isLoading && videos.length === 0) {
    content = <div class="col-span-12">No videos Found</div>;
  }
  if (!isError && !isLoading && videos.length > 0) {
    content = currentVideos.map((video) => <VideoGrid key={video.id} video={video} />);
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
          <Pagination postPerPage={postPerPage} totalVideos={videos.length} paginate={paginate} />
      </section>
    </section>
  );
};

export default Grid;

import React, { useEffect } from "react";
import VideoDescription from "../description/VideoDescription";
import VideoPlayer from "../description/Player";
import RelatedVideoList from "../list/RelatedVideoList";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideo } from "../../features/video/VideoSlice";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";

const Video = () => {
  const { isLoading, isError, error, video } = useSelector(
    (state) => state.video
  );
  const dispatch = useDispatch();
  const { videoId } = useParams();
  const { link, title, id, tags } = video || {};
  useEffect(() => {
    dispatch(fetchVideo(videoId));
  }, [dispatch, videoId]);

  let content = null;
  if (isLoading) content = <Loading />;
  if (!isLoading && isError) content = <div class="col-span-12">{error}</div>;
  if (!isError && !isLoading && !video.id) {
    content = <div class="col-span-12">No video Found</div>;
  }
  if (!isError && !isLoading && video.id) {
    content = (
      <div class="grid grid-cols-3 gap-2 lg:gap-8">
        <div class="col-span-full w-full space-y-8 lg:col-span-2">
          <VideoPlayer link={link} title={title} />

          <VideoDescription video={video} />
        </div>

        <RelatedVideoList currentVideoId={id} tags={tags} />
      </div>
    );
  }

  return (
    <section class="pt-6 pb-20 text-start">
      <div class="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">{content}</div>
    </section>
  );
};

export default Video;

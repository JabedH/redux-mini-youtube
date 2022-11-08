import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelatedVideos } from "../../features/relatedVideos/RelatedVideosSlice";
import Loading from "../Loading/Loading";
import RelatedVideoListItem from "./RelatedVideoListItem";

const RelatedVideoList = ({currentVideoId, tags}) => {
  const{relatedVideos,isLoading, isError, error,}= useSelector(state =>state.relatedVideos)
  const myv= useSelector(state =>state.relatedVideos)
  console.log(myv)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchRelatedVideos({tags, id:currentVideoId}))
  },[tags,dispatch, currentVideoId])
  let content = null;
  if(isLoading) content =<Loading/>
  if (!isLoading && isError) content = <div class="col-span-12">{error}</div>;
  if (!isError && !isLoading && relatedVideos.length === 0) {
    content = <div class="col-span-12">No videos Found</div>;
  }
  if (!isError && !isLoading && relatedVideos.length > 0) {
    content = relatedVideos.map((video) => <RelatedVideoListItem key={video.id} video={video} />);
  }
  return (
    <div class="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
      {content}
    </div>
  );
};

export default RelatedVideoList;

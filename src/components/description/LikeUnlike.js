import React from "react";
import { useDispatch, useSelector } from "react-redux";
import likeImage from "../../assets/like.svg";
import unlikeImage from "../../assets/unlike.svg";
import likeUpdate from "../../features/thunk/LikeUpdate";

const LikeUnlike = ({ video }) => {
 
  const dispatch = useDispatch();
  let like =video.likes
  const handleLike = ()=>{
    like++
    console.log(like)
    dispatch(likeUpdate(like));
  }
  return (
    <div class="flex gap-10 w-48">
      <div class="flex gap-1">
        <div class="shrink-0">
          <img class="w-5 block" src={likeImage} alt="Like" /> 
        </div>
        <div onClick={()=>handleLike(video.id)} class="cursor-pointer text-sm leading-[1.7142857] text-slate-600">
          {video.likes}K
        </div>
      </div>
      <div class="flex gap-1">
        <div class="shrink-0">
          <img class="w-5 block" src={unlikeImage} alt="Unlike" />
        </div>
        <div class="text-sm leading-[1.7142857] text-slate-600">
          {video.unlikes}K
        </div>
      </div>
    </div>
  );
};

export default LikeUnlike;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useMatch, useNavigate } from "react-router-dom";
import { authorRemoved, authorSelected, getAuthor } from '../../features/filter/filterSlice';
import { getVideo } from "../../features/video/VideoAPI";

const VideoGrid = ({ video }) => {
  const {
    id,
    title,
    description,
    author,
    avatar,
    date,
    duration,
    views,
    link,
    thumbnail,
  } = video;

  const dispatch = useDispatch()
  const {authors: selectedAuthor} = useSelector(state => state.filter)

  const isSelected = selectedAuthor.includes(author)? true: false
const handleSelected =()=>{
  // dispatch(getAuthor(author))
  if(isSelected){
    dispatch(authorRemoved(author))
  } else{
    dispatch(authorSelected(author))
  }
}
  return (
    <div class="col-span-12 sm:col-span-6 md:col-span-3 duration-300 hover:scale-[1.03]">
      <div class="w-full flex flex-col">
        <div class="relative">
          <Link to={`/videos/${id}`} href="">
            <img src={thumbnail} class="w-full h-auto" alt="Some video title" />
          </Link>

          <p class="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">
            {duration}
          </p>
        </div>

        <div class="flex flex-row mt-2 gap-2">
          <Link to={`/videos/${id}`} href="#" class="shrink-0">
            <img
              src={avatar}
              class="rounded-full h-6 w-6"
              alt="Learn with Sumit"
            />
          </Link>

          <div class="flex flex-col">
            <Link to={`/videos/${id}`} href="video.html">
              <p class="text-slate-900 text-sm font-semibold">{title}</p>
            </Link>
            <div name={author}  onClick={handleSelected} class="cursor-pointer text-gray-400 text-xs mt-2 hover:text-gray-600" href="#">
              {author}
            </div>
            {/* <input
                class=" none  outline-none border-none h-11 px-5 w-[500px] rounded-l-full focus:ring-1 focus:ring-black-500 text-base"
                type="search"
                name="search"
                value={input}
                placeholder="Search"
                onClick={author=>handleSearch(author) }
              /> */}
            <p class="text-gray-400 text-xs mt-1">
              {views} views . {date}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoGrid;

import React from "react";
import { Link } from "react-router-dom";

const RelatedVideoListItem = ({video}) => {

const {id, thumbnail, title,duration,author}= video || {}
  console.log('this is related video', video)
  return (
    <div class="w-full flex flex-row gap-2 mb-4 ">
      <div class=" relative w-[168px] h-[94px] flex-none duration-300 hover:scale-[1.03]">
        <Link to={`/video/${id}`} >
          <img
            src={thumbnail}
            class="object-cover rounded-md"
            alt={title}
          />
        </Link>
        <p class="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">
          {duration}
        </p>
      </div>

      <div clas="flex flex-col w-full">
        <a href="#">
          <p class="text-slate-900 text-sm font-semibold">{title}</p>
        </a>
        <a class="text-gray-400 text-xs mt-2 hover:text-gray-600" href="#">
         {author}
        </a>
        <p class="text-gray-400 text-xs mt-1">100K views . 23 Oct 2022</p>
      </div>
    </div>
  );
};

export default RelatedVideoListItem;

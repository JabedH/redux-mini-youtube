import React, { useState } from "react";
import { useSelector } from "react-redux";

const Pagination = ({postPerPage, totalVideos,paginate }) => {
  const pageNumbers =[]
  for (let i=1; i<= Math.ceil(totalVideos/postPerPage); i++){
    pageNumbers.push(i)
  }
  

  return (
    // <!-- pagination-->
    <section class="pt-12 flex">
      <div class="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 justify-end">
        {pageNumbers.map(number=> (
          <div >
             <button key={number} class="bg-blue-600 text-white px-4 py-1 rounded-full"
               onClick={()=>paginate(number)} >{number}</button> 
             </div>
        ))}
      </div>
    </section>
  );
};

export default Pagination;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Tag from "./Tag";
import { fetchTags } from "../../features/Tags/tagsSlice";
import { clear } from "../../features/filter/filterSlice";

const Tags = () => {
  const dispatch = useDispatch();
  const { tags } = useSelector((state) => state.tags);
  useEffect(() => {
    dispatch(fetchTags());
  }, [dispatch]);
  const handleSelected =()=>{
    dispatch(clear())
  }
  return tags?.length > 0 ? (
    <section>
      <div class="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
        {tags.map((tag) => (
          <Tag tag={tag} />
        ))}
        {/* <button onClick={handleSelected} >Clear</button> */}
      </div>
    </section>
  ) : null;
};

export default Tags;

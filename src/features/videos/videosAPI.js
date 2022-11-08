import axios from "../../utils/axios.js";
export const getVideos = async (tags, search) => {
  let queryString = "";

  if (tags?.length > 0) {
      queryString += tags.map((tag) => `tags_like=${tag}`);
      console.log(queryString)
      // .join("&")+`&_limit=${5}`
  }

  if (search !== "") {
      queryString += `&q=${search}`;
      console.log(queryString)
  }

  const response = await axios.get(`/videos/?${queryString}`);
  return response.data;
};

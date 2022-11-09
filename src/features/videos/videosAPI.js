import axios from "../../utils/axios.js";
export const getVideos = async (tags, search,authors) => {
  console.log(tags, search,authors)
  let queryString = "";
  
  if (tags?.length > 0) {
      queryString += tags.map((tag) => `tags_like=${tag}`);
      console.log(queryString)
      // .join("&")+`&_limit=${5}`
  }
  // if (authors?.length > 0) {
  //     queryString += authors.map((author) => `&q=$${author}`);
  //     console.log(queryString)
  //     // .join("&")+`&_limit=${5}`
  // }

  if (search !== "") {
      queryString += `&q=${search}`;
      console.log(queryString)
  }
  if (authors !== "") {
      queryString += `&q=${authors}`;
      console.log(queryString)
  }
console.log()
  const response = await axios.get(`/videos/?${queryString}`);
  console.log(response)
  return response.data;
};

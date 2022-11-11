
import videosSlice from "../videos/videosSlice";

const likeUpdate = (videoId, like) => {
  return async (dispatch) => {
    const response = await fetch(`http://localhost:9000/videos/${videoId}`, {
      method: "PATCH",
      body: JSON.stringify({
        likes: like,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const video = await response.json();
    dispatch(videosSlice(video.id, video.likes));
  };
};

export default likeUpdate;
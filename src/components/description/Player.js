import React from "react";

const Player = () => {
  return (
    // <!-- video player -->
    <iframe
      width="100%"
      class="aspect-video"
      src="https://www.youtube-nocookie.com/embed/6O4s7v28nlw"
      title="Some video title"
      frameborder=""
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  );
};

export default Player;

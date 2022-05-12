import React from "react";
import YouTube from "react-youtube";

export default function Youtube({ Link }) {
  const onPlayerReady = (event) => {
    event.target.pauseVideo();
  };

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div>
      <YouTube videoId={Link} opts={opts} onReady={onPlayerReady} />;
    </div>
  );
}

import React from "react";
import YouTube from "react-youtube";

export default function Youtube() {
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

  return <YouTube videoId="ckiaNqOrG5U" opts={opts} onReady={onPlayerReady} />;
}

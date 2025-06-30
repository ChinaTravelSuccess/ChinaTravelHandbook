import React from "react";
import ReactPlayer from "react-player";

export interface YouTubeEmbedProps {
  videoId: string;
  width?: string | number;
  height?: string | number;
  playing?: boolean;
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({
  videoId,
  width = "100%",
  height = "100%",
  playing = false,
}) => {
  const src = `https://www.youtube.com/watch?v=${videoId}`;

  return (
    <div style={{ position: "relative", paddingTop: "56.25%" /* 16:9比例 */ }}>
      <ReactPlayer
        src={src}
        playing={playing}
        controls
        width={width}
        height={height}
        style={{ position: "absolute", top: 0, left: 0 }}
      />
    </div>
  );
};

export default YouTubeEmbed;

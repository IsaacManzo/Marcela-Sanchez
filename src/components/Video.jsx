import React from "react";
import ReactPlayer from "react-player";

const Video = () => {
  return (
    <div className="flex justify-center pt-10 pb-10">
      <div className="max-w-screen-sm lg:max-w-screen-lg w-full overflow-hidden shadow-lg relative ">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=DXrofRpkieQ&t=0s&ab_channel=IsaacManzo"
          controls
          width="100%"
          height="433px"
          style={{ borderRadius: "10px" }}
        />
      </div>
    </div>
  );
};

export default Video;

import VideoCard from "./VideoCard";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { controlSlidebar } from "../features/slidebarSlice";
import { useDispatch } from "react-redux";
import VideoContainerShimmer from "./shimmer/VideoContainerShimmer";

function VideoContainer() {
  const [videoData, setVideoData] = useState([]);
  const dispatch = useDispatch();

  const fetchData = async () => {
    const response = await fetch(YOUTUBE_VIDEOS_API);
    const data = await response.json();
    setVideoData(data.items);
    // console.log(data.items[0]);
  };

  useEffect(() => {
    dispatch(controlSlidebar(true));
    fetchData();
  }, []);

  if (videoData.length === 0) return <VideoContainerShimmer />;

  return (
    <div className="flex flex-wrap justify-between p-5">
      {videoData.map((video) => (
        <Link to={`/watch?v=${video.id}`} key={video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
}

export default VideoContainer;

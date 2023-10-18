import SearchedVideoCard from "../SearchedVideoCard";
import { useState, useEffect } from "react";

function SlidebarVideoContainer({ link }) {
  const [videoData, setVideoData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(link);
    const data = await response.json();
    setVideoData(data.items);
    // console.log(data.items.length);
  };

  return (
    <div>
      {videoData?.map((video) => (
        <SearchedVideoCard info={video} key={video.etag} />
      ))}
    </div>
  );
}

export default SlidebarVideoContainer;

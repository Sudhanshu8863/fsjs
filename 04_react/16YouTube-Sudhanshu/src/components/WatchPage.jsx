import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { controlSlidebar } from "../features/slidebarSlice";
import { useSearchParams } from "react-router-dom";
import ReactPlayer from "react-player";
import Comment from "./Comment";

function WatchPage() {
  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  useEffect(() => {
    dispatch(controlSlidebar(false));
    return () => {
      dispatch(controlSlidebar(true));
    };
  }, []);

  return (
    <div className="w-full h-screen flex  justify-evenly">
      <ReactPlayer
        style={{ marginTop: "50px" }}
        url={`https://www.youtube.com/watch?v=${videoId}?si=J3HQ3iCAnUrzZ1Ih`}
        playing={true}
        width="58.7%"
        height="70%"
        controls
      />
      <div className="p-1 rounded bg-stone-600 h-[79%] mt-5">
        <Comment videoId={videoId} />
      </div>
    </div>
  );
}

export default WatchPage;

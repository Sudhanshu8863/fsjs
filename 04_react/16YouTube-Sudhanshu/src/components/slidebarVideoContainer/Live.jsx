import SlidebarVideoContainer from "./SlidebarVideoContainer";
import { YOUTUBE_LIVE_API } from "../../utils/constants";

function Live() {
  return (
    <div>
      <SlidebarVideoContainer link={YOUTUBE_LIVE_API} />
    </div>
  );
}

export default Live;

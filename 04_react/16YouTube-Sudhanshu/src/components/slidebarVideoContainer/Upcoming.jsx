import SlidebarVideoContainer from "./SlidebarVideoContainer";
import { YOUTUBE_UPCOMING_API } from "../../utils/constants";

function Upcoming() {
  return (
    <div>
      <SlidebarVideoContainer link={YOUTUBE_UPCOMING_API} />
    </div>
  );
}

export default Upcoming;

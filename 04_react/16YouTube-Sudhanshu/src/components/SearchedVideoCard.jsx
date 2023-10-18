import { Link } from "react-router-dom";

function SearchedVideoCard({ info }) {
  const { id, snippet } = info;
  const { kind, videoId } = id;

  const { channelTitle, description, title, thumbnails } = snippet;

  return (
    <div className="flex px-10 mx-10 my-8 space-x-5">
      <div className="rounded-lg overflow-hidden w-80 h-44 flex flex-shrink-0  items-center justify-center">
        {kind === "youtube#video" ? (
          <Link to={`/watch?v=${videoId}`}>
            <img src={thumbnails.high.url} alt="video_thumnail" />
          </Link>
        ) : (
          <img
            src={thumbnails.high.url}
            alt="channel_thumnail"
            className="w-44 h-44 rounded-full"
          />
        )}
      </div>
      <div className="space-y-3">
        <h1 className="font-semibold mt-2">{title}</h1>
        <h1 className="text-xs font-medium">{channelTitle}</h1>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
}

export default SearchedVideoCard;

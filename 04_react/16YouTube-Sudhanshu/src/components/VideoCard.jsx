function VideoCard({ info }) {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="w-60 p-2">
      <img
        src={thumbnails?.medium?.url}
        alt="video_thumbnail"
        className="rounded"
      />
      <h1 className="text-xs py-1">{title}</h1>
      <h1 className="text-xs text-gray-700 font-semibold">{channelTitle}</h1>
      <h1 className="text-xs text-gray-700 font-medium pt-1">
        {statistics?.likeCount} views
      </h1>
    </div>
  );
}

export default VideoCard;

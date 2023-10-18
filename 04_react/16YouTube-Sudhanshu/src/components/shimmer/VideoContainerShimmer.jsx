function VideoContainerShimmer() {
  const emptyVideo = Array(20).fill("");

  return (
    <div className="flex flex-wrap justify-between p-5">
      {emptyVideo.map((video, index) => (
        <div key={index} className="w-60 p-2 animate-pulse">
          <div className="w-56 h-32 bg-gray-300 rounded-md"> </div>
        </div>
      ))}
    </div>
  );
}

export default VideoContainerShimmer;

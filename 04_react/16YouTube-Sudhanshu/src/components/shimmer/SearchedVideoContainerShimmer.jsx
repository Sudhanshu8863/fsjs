function SearchedVideoContainerShimmer() {
  const emptySearchedVideo = Array(5).fill("");

  return (
    <div>
      {emptySearchedVideo.map((item, index) => (
        <div
          key={index}
          className="ml-20 w-[55rem] h-48 bg-gray-300 animate-pulse my-5"
        ></div>
      ))}
    </div>
  );
}

export default SearchedVideoContainerShimmer;

import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_RESULT_API } from "../utils/constants";
import { useSelector } from "react-redux";
import SearchedVideoCard from "./SearchedVideoCard";
import SearchedVideoContainerShimmer from "./shimmer/SearchedVideoContainerShimmer";

function SearchedVideoContainer() {
  const searchFor = useSelector((store) => store.search.searchFor);

  const [searchResult, setSearchResult] = useState([]);

  const fetchData = async () => {
    const searchLink = `${YOUTUBE_SEARCH_RESULT_API}${searchFor}`;

    const response = await fetch(searchLink);
    const data = await response.json();
    setSearchResult(data.items);
  };

  useEffect(() => {
    fetchData();
    return () => {
      setSearchResult([]);
    };
  }, [searchFor]);

  if (searchResult.length === 0) return <SearchedVideoContainerShimmer />;

  return (
    <div>
      {searchResult?.map((video) => (
        <SearchedVideoCard info={video} key={video.etag} />
      ))}
    </div>
  );
}

export default SearchedVideoContainer;

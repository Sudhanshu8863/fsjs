import { useEffect, useState } from "react";
import { YOUTUBE_COMMENT_API } from "../utils/constants";

function Comment({ videoId }) {
  const [commentList, setCommentList] = useState([]);

  const commentLink = `${YOUTUBE_COMMENT_API}${videoId}`;

  useEffect(() => {
    fetchCommentList();
  }, []);

  const fetchCommentList = async () => {
    const response = await fetch(commentLink);
    const data = await response.json();
    setCommentList(data.items);
    // console.log(commentList);
  };

  return (
    <div className="flex flex-col w-96 h-[99.9%] bg-white space-y-5 overflow-x-auto">
      {commentList?.map((comment) => (
        <div
          key={comment.id}
          className=" border border-gray-700 p-2 rounded-sm m-2"
        >
          <h1 className="font-semibold text-gray-100 bg-black text-center">
            {comment?.snippet?.topLevelComment?.snippet?.authorDisplayName}
          </h1>
          <p className="text-justify">
            {comment?.snippet?.topLevelComment?.snippet?.textDisplay}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Comment;

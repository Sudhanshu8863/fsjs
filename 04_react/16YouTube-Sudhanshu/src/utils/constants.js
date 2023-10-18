const API_KEY = "AIzaSyAeL9W7AkVF7e707byJuHbcPRPg873yU4E";

const YOUTUBE_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=40&regionCode=IN&key=${API_KEY}`;

const YOUTUBE_SEARCH_RESULT_API = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&key=${API_KEY}&q=`;

const YOUTUBE_LIVE_API = `Https://youtube.googleapis.com/youtube/v3/search?part=snippet&eventType=live&maxResults=50&q=news&type=video&regionCode=IN&key=${API_KEY}`;

const YOUTUBE_UPCOMING_API = `Https://youtube.googleapis.com/youtube/v3/search?part=snippet&eventType=upcoming&maxResults=50&q=news&type=video&regionCode=IN&key=${API_KEY}`;

const YOUTUBE_COMMENT_API = `https://www.googleapis.com/youtube/v3/commentThreads?textFormat=plainText&part=snippet&maxResults=100&key=${API_KEY}&videoId=`;

export {
  YOUTUBE_VIDEOS_API,
  YOUTUBE_SEARCH_RESULT_API,
  YOUTUBE_LIVE_API,
  YOUTUBE_UPCOMING_API,
  YOUTUBE_COMMENT_API,
};

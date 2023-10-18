import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./app/store";
import VideoContainer from "./components/VideoContainer";
import WatchPage from "./components/WatchPage";
import SearchedVideoContainer from "./components/SearchedVideoContainer";
import { Live, Upcoming } from "./components/slidebarVideoContainer";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<VideoContainer />} />
      <Route path="watch" element={<WatchPage />} />
      <Route path="results" element={<SearchedVideoContainer />} />
      <Route path="live" element={<Live />} />
      <Route path="upcoming" element={<Upcoming />} />
      <Route path="trending" element={<VideoContainer />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

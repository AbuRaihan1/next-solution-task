import { createBrowserRouter } from "react-router-dom";
import AllNews from "./Components/LatestNews/AllNews";
import Home from "./Components/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/allNews",
    element: <AllNews />,
  },
]);

export default router;

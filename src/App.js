import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";
import Products from "./Components/Products/Products";
import LatestNews from "./Components/LatestNews/LatestNews";
import { RouterProvider } from "react-router-dom";
import router from "./router";
function App() {
  return (
    <div className="app-bg">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

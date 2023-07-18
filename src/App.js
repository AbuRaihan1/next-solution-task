import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";
import Products from "./Components/Products/Products";
import LatestNews from "./Components/LatestNews/LatestNews";
function App() {
  return (
    <div className="app-bg">
      <Navbar />
      <Banner />
      <Products />
      <LatestNews />
    </div>
  );
}

export default App;

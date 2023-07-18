import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";
import Products from "./Components/Products/Products";
function App() {
  return (
    <div className="app-bg">
      <Navbar />
      <Banner />
      <Products />
    </div>
  );
}

export default App;

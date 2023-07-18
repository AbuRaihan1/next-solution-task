import "./App.css";
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

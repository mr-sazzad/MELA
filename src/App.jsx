import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Hero, Login, Navbar } from "./components/index";
import Products from "./components/Products";

function App() {
  return (
    <div className="">
      <Navbar />
      <div className="app">
        <Routes>
          <Route path="home" element={<Hero />} />
          <Route path="login" element={<Login />} />
          <Route path="products" element={<Products />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

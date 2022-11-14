import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Cart, Hero, Login, Navbar, Testimonials } from "./components/index";
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
          <Route path="cart" element={<Cart />} />
          <Route path="testimonials" element={<Testimonials />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

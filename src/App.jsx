import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/navbar/Nav";
import Shop from "./pages/Shop";
import ShopCategory from "./pages/ShopCategory";
import Card from "./pages/Card";
import LoginSighnUp from "./pages/LoginSighnUp";
import Product from "./pages/Product";
import Footer from "./components/Footer";
import men_banner from './components/assets/banner_mens.png'
import women_banner from './components/assets/banner_women.png'
import kids_banner from './components/assets/banner_kids.png'
function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/shop" element={<Shop />} />
          <Route path="/men" element={<ShopCategory category={"men"} banner={men_banner} />} />
          <Route path="/women" element={<ShopCategory category={"women"} banner={women_banner} />} />
          <Route path="/kid" element={<ShopCategory category={"kid"} banner={kids_banner}/>} />

          <Route path="product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>

          <Route path="/cart" element={<Card />} />
          <Route path="/" element={<LoginSighnUp />} />
        </Routes>

        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;

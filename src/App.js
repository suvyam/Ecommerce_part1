import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./Components/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import OurStore from "./pages/OurStore";
import Blog from "./pages/Blog";
import Compareproducts from "./pages/Compareproducts";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Login";
import ForgottPassword from "./pages/ForgottPassword";
import Signup from "./pages/Signup";
import Resetpassword from "./pages/Resetpassword";
import SingleBlog from "./pages/SingleBlog";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import TermAndCondition from "./pages/TermAndCondition";
import ShippingPolicy from "./pages/ShippingPolicy";
import Singleproduct from "./pages/Singleproduct";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="blogs" element={<Blog />} />
            <Route path="blogs/blog/:id" element={<SingleBlog />} />
            <Route path="products" element={<OurStore />} />
            <Route path="/products/:id" element={<Singleproduct />} />
            <Route path="compare" element={<Compareproducts />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="login" element={<Login />} />
            <Route path="forgot-password" element={<ForgottPassword />} />
            <Route path="signup" element={<Signup />} />
            <Route path="reset-password" element={<Resetpassword />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />

            <Route path="refund-policy" element={<RefundPolicy />} />
            <Route path="term-condition" element={<TermAndCondition />} />
            <Route path="shipping-policy" element={<ShippingPolicy />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

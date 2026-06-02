import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Events from "./pages/Events";
import EventDetails from "./pages/EventDetails";
import Workshops from "./pages/Workshops";
import Booking from "./pages/Booking";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />

        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<EventDetails />} />

        <Route path="/workshops" element={<Workshops />} />

        <Route path="/booking" element={<Booking />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
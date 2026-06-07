import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/footer";

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
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-ecoGreen focus:text-white focus:px-4 focus:py-2 focus:rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
      >
        Skip to Main Content
      </a>
      <Navbar />

      <div className="pt-20">
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
      </div>
    </>
  );
}

export default App;
import { useState } from "react";
import products from "../data/products.json";
import ProductCard from "../components/ProductCard";

function Products() {
  const [category, setCategory] = useState("All");

  const filteredProducts =
    category === "All"
      ? products
      : products.filter(
          (product) => product.category === category
        );

  return (
     <main className="pt-28 px-6 dark:bg-gray-900 dark:text-white min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-center md:text-left">
        Products
      </h1>

      <select
        onChange={(e) => setCategory(e.target.value)}
        className="border p-3 rounded mb-6"
      >
        <option>All</option>
        <option>Food</option>
        <option>Lifestyle</option>
      </select>

      <div className="grid md:grid-cols-2 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </main>
  );
}

export default Products;
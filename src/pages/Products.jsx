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

      <div className="mb-6">
        <label htmlFor="category-select" className="block text-sm font-semibold mb-2">
          Filter by Category
        </label>
        <select
          id="category-select"
          onChange={(e) => setCategory(e.target.value)}
          className="border border-gray-300 dark:border-gray-700 p-3 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ecoGreen"
        >
          <option value="All">All Categories</option>
          <option value="Food">Food</option>
          <option value="Lifestyle">Lifestyle</option>
        </select>
      </div>

      <ul className="grid md:grid-cols-2 gap-6 list-none p-0">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </ul>
    </main>
  );
}

export default Products;
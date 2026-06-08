import { useState } from "react";
import products from "../data/products.json";
import ProductCard from "../components/ProductCard";

function Products() {
  const [category, setCategory] = useState("All");

  const categories = ["All", "Food", "Lifestyle"];

  const filteredProducts =
    category === "All"
      ? products
      : products.filter(
          (product) => product.category === category
        );

  return (
    <main id="main-content" className="pt-32 pb-24 px-6 max-w-7xl mx-auto min-h-screen dark:text-white">
      {/* Page Header */}
      <div className="mb-10 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-display font-extrabold text-ecoGreen dark:text-green-400">
          Our Products
        </h1>
        <p className="mt-2 text-gray-650 dark:text-gray-400 text-base md:text-lg max-w-xl">
          Explore our handpicked collection of fresh organic produce and sustainable lifestyle essentials.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-200/50 dark:border-gray-800/50 pb-6">
        <div>
          <span className="block text-xs uppercase tracking-wider text-gray-455 dark:text-gray-400 font-bold mb-2">
            Filter by Category
          </span>
          <div className="flex flex-wrap gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-5 py-2.5 rounded-2xl text-sm font-semibold transition-all duration-200 border ${
                  category === cat
                    ? "bg-ecoGreen text-white border-ecoGreen shadow-md shadow-green-700/20"
                    : "bg-white dark:bg-gray-800 text-gray-650 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-750"
                }`}
              >
                {cat === "All" ? "All Categories" : cat}
              </button>
            ))}
          </div>
        </div>
        
        <div className="text-sm text-gray-455 dark:text-gray-400 font-medium">
          Showing <span className="font-bold text-ecoGreen dark:text-green-400">{filteredProducts.length}</span> items
        </div>
      </div>

      {/* Products Grid */}
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 list-none p-0">
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
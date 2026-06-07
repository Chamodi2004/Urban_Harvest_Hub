import { useParams } from "react-router-dom";
import products from "../data/products.json";

function ProductDetails() {
  const { id } = useParams();

  const product = products.find(
    (p) => p.id === Number(id)
  );

  if (!product) {
    return (
      <main id="main-content" className="pt-28 px-6 max-w-7xl mx-auto dark:bg-gray-900 dark:text-white min-h-screen text-center">
        <h1 className="text-2xl font-bold text-red-600">Product not found</h1>
      </main>
    );
  }

  return (
    <main id="main-content" className="pt-28 px-6 max-w-5xl mx-auto dark:bg-gray-900 dark:text-white min-h-screen">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto object-cover rounded-2xl shadow-xl"
          />
        </div>

        <div>
          <h1 className="text-4xl font-bold text-ecoGreen dark:text-green-400 mb-4">
            {product.name}
          </h1>

          <p className="text-2xl font-extrabold text-gray-800 dark:text-gray-100 mb-4">
            ${product.price}
          </p>

          <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 mb-6">
            {product.description}
          </p>

          <div className="inline-block px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-sm font-semibold">
            Availability:{" "}
            <span className={product.availability === "In Stock" ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}>
              {product.availability}
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProductDetails;
import { useParams } from "react-router-dom";
import products from "../data/products";

function ProductDetails() {
  const { id } = useParams();

  const product = products.find(
    (p) => p.id === Number(id)
  );

  return (
    <main className="dark:bg-gray-900 dark:text-white">
      <img
        src={product.image}
        alt={product.name}
        className="w-full max-w-md rounded"
      />

      <h1 className="text-4xl font-bold mt-6">
        {product.name}
      </h1>

      <p className="mt-4">
        {product.description}
      </p>

      <p className="font-bold mt-4">
        ${product.price}
      </p>

      <p>{product.availability}</p>
    </main>
  );
}

export default ProductDetails;
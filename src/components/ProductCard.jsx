import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
<li className="bg-white dark:bg-gray-800 dark:text-white rounded-xl p-4 card-shadow list-none">
      <img
        src={product.image}
        alt={product.name}
        className="h-48 w-full object-cover rounded"
      />

      <h2 className="text-2xl font-bold mt-4">
        {product.name}
      </h2>

      <p>{product.category}</p>

      <p className="font-bold mt-2">
        ${product.price}
      </p>

      <Link
        to={`/products/${product.id}`}
        className="bg-ecoGreen text-white px-4 py-2 rounded inline-block mt-4 hover:bg-green-800 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ecoGreen"
        aria-label={`View details for ${product.name}`}
      >
        View Details
      </Link>
    </li>
  );
}

export default ProductCard;
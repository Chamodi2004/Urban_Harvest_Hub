import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <li className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-700/60 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full group list-none">
      
      {/* Product Image & Category Badge */}
      <div className="relative overflow-hidden h-56 w-full bg-gray-50 dark:bg-gray-900">
        <div className="absolute top-4 left-4 z-10">
          <span className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm text-ecoGreen dark:text-green-400 text-[10px] font-extrabold uppercase tracking-wider px-3 py-1.5 rounded-xl shadow-sm border border-gray-100/10">
            {product.category}
          </span>
        </div>
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Product Information */}
      <div className="p-6 flex flex-col flex-grow">
        <h2 className="text-xl font-display font-bold text-gray-950 dark:text-white group-hover:text-ecoGreen dark:group-hover:text-green-400 transition-colors duration-200">
          {product.name}
        </h2>
        
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 line-clamp-2">
          {product.description}
        </p>

        {/* Footer section of card */}
        <div className="flex items-center justify-between mt-auto pt-5 border-t border-gray-100 dark:border-gray-700/50">
          <div>
            <span className="block text-[10px] text-gray-400 dark:text-gray-500 font-bold uppercase tracking-wider">Price</span>
            <span className="text-2xl font-extrabold text-gray-900 dark:text-white">
              ${product.price}
            </span>
          </div>

          <Link
            to={`/products/${product.id}`}
            className="bg-ecoGreen hover:bg-ecoGreen-dark dark:bg-green-700 dark:hover:bg-green-600 text-white font-semibold text-sm px-5 py-3 rounded-2xl shadow-sm hover:shadow transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ecoGreen"
            aria-label={`View details for ${product.name}`}
          >
            Details
          </Link>
        </div>
      </div>

    </li>
  );
}

export default ProductCard;
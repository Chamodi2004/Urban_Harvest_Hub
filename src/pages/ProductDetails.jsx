import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Leaf, Shield, Check, ShoppingBag } from "lucide-react";
import products from "../data/products.json";

function ProductDetails() {
  const { id } = useParams();

  const product = products.find(
    (p) => p.id === Number(id)
  );

  if (!product) {
    return (
      <main id="main-content" className="pt-32 px-6 max-w-7xl mx-auto dark:text-white min-h-screen text-center">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl border border-gray-100 dark:border-gray-700 max-w-md mx-auto shadow-md">
          <h1 className="text-2xl font-display font-bold text-red-650 mb-4">Product Not Found</h1>
          <p className="text-gray-500 dark:text-gray-400 mb-6">The product you are looking for might have been removed or doesn't exist.</p>
          <Link to="/products" className="inline-flex items-center gap-2 bg-ecoGreen text-white px-5 py-2.5 rounded-2xl font-semibold hover:bg-ecoGreen-dark transition">
            <ArrowLeft size={18} /> Back to Products
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main id="main-content" className="pt-32 pb-24 px-6 max-w-6xl mx-auto dark:text-white min-h-screen">
      
      {/* Navigation & Breadcrumbs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <Link 
          to="/products" 
          className="inline-flex items-center gap-2 text-gray-500 hover:text-ecoGreen dark:hover:text-green-400 font-semibold text-sm transition-colors duration-250"
        >
          <ArrowLeft size={16} /> Back to Products
        </Link>
        
        <div className="text-xs text-gray-400 dark:text-gray-500 font-medium">
          <Link to="/" className="hover:text-ecoGreen transition-colors">Home</Link> /{" "}
          <Link to="/products" className="hover:text-ecoGreen transition-colors">Products</Link> /{" "}
          <span className="text-gray-650 dark:text-gray-300 font-semibold">{product.name}</span>
        </div>
      </div>

      {/* Main Details Card */}
      <div className="bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700/60 shadow-xl overflow-hidden p-6 lg:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          
          {/* Image Container */}
          <div className="relative group rounded-2xl overflow-hidden bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-700">
            <span className="absolute top-4 left-4 z-10 bg-ecoGreen text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-xl shadow-md">
              {product.category}
            </span>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto object-cover max-h-[450px] transition duration-500 group-hover:scale-[1.01]"
            />
          </div>

          {/* Details Column */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl lg:text-4xl font-display font-extrabold text-gray-950 dark:text-white leading-tight">
                {product.name}
              </h1>
              <div className="flex items-center gap-3 mt-3">
                <span className="text-3xl font-extrabold text-ecoGreen dark:text-green-400">
                  ${product.price}
                </span>
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-semibold ${
                  product.availability === "In Stock" 
                    ? "bg-green-50 dark:bg-green-950/30 text-green-700 dark:text-green-400" 
                    : "bg-red-50 dark:bg-red-950/30 text-red-700 dark:text-red-400"
                }`}>
                  <span className={`w-2.5 h-2.5 rounded-full ${product.availability === "In Stock" ? "bg-green-500" : "bg-red-500"}`}></span>
                  {product.availability}
                </span>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed border-t border-gray-100 dark:border-gray-700/50 pt-6">
              {product.description}
            </p>

            {/* Ecological Scorecard (sustainable focus) */}
            <div className="bg-green-50/40 dark:bg-gray-900/40 rounded-2xl p-5 border border-green-100/20 dark:border-gray-700/30 space-y-4">
              <h3 className="font-display font-bold text-sm text-ecoGreen dark:text-green-400 flex items-center gap-2">
                <Leaf size={16} /> Eco Specifications
              </h3>
              
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div className="space-y-1">
                  <span className="text-gray-400 block uppercase font-bold tracking-wider">Source</span>
                  <span className="font-semibold text-gray-700 dark:text-gray-200">100% Organic, Local</span>
                </div>
                <div className="space-y-1">
                  <span className="text-gray-400 block uppercase font-bold tracking-wider">Packaging</span>
                  <span className="font-semibold text-gray-700 dark:text-gray-200">Zero Waste / Biodegradable</span>
                </div>
                <div className="space-y-1">
                  <span className="text-gray-400 block uppercase font-bold tracking-wider">Carbon Offset</span>
                  <span className="font-semibold text-gray-700 dark:text-gray-200">Carbon Neutral Certified</span>
                </div>
                <div className="space-y-1">
                  <span className="text-gray-400 block uppercase font-bold tracking-wider">Durability</span>
                  <span className="font-semibold text-gray-700 dark:text-gray-200">Reusable & Recyclable</span>
                </div>
              </div>
            </div>

            {/* Check guarantees */}
            <div className="space-y-2 text-sm text-gray-550 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <Check size={16} className="text-ecoGreen dark:text-green-400" />
                <span>Chemical-free farming & natural processing</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={16} className="text-ecoGreen dark:text-green-400" />
                <span>Supporting local Sri Lankan farmers</span>
              </div>
            </div>

            {/* CTA Buy Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <button 
                onClick={() => alert("Purchasing is disabled in this demo.")}
                className="flex-grow inline-flex items-center justify-center gap-2 bg-ecoGreen hover:bg-ecoGreen-dark dark:bg-green-700 dark:hover:bg-green-600 text-white font-bold py-4 px-6 rounded-2xl transition duration-200 shadow-md shadow-green-700/10"
              >
                <ShoppingBag size={20} /> Purchase Now
              </button>
              
              <Link 
                to="/booking" 
                className="inline-flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-650 text-gray-700 dark:text-white font-semibold py-4 px-6 rounded-2xl transition duration-200"
              >
                Inquire Details
              </Link>
            </div>

          </div>

        </div>
      </div>

    </main>
  );
}

export default ProductDetails;
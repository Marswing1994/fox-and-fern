import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import products from "../data/products";
import { Link } from "react-router-dom";

export default function Product() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <main className="min-h-[60vh] flex items-center justify-center bg-[var(--form-bg-color)]/90">
        <p className="text-[var(--form-text-color)]">Product not found.</p>
      </main>
    );
  }

  return (
    <main className="max-w-6xl mx-auto px-6 py-16 transition-colors duration-400">

      <div className="grid md:grid-cols-2 gap-12 p-8 rounded-2xl items-center bg-[var(--form-bg-color)]/90 shadow-xl transition-colors duration-400">

        {/* Product Image */}
        <div className="flex justify-center md:justify-start">
          <img
            src={product.image}
            alt={product.name}
            className="w-full max-w-md object-contain"
          />
        </div>

        {/* Product Info */}
        <div className="space-y-6">

          <h1 className="font-heading text-4xl text-[var(--form-text-color)] transition-colors duration-400">
            {product.name}
          </h1>

          <p className="text-2xl text-[var(--total-color)] font-semibold transition-colors duration-400">
            {product.price}
          </p>

          <div className="border-t border-neutral-700 pt-6">
            <p className="text-[var(--form-placeholder)] leading-relaxed transition-colors duration-400">
              {product.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mt-6">

            <Link
              to="/shop"
              className="px-6 py-3 text-neutral-500 hover:text-emerald-400 transition bg-green-400/10 rounded border-solid border-2 border-green-500/20"
            >
              ← Back to Shop
            </Link>

            <button
              onClick={() => addToCart(product)}
              className="px-8 py-3 bg-[var(--form-button)] hover:bg-emerald-600 text-[var(--h1-text-color)] rounded-lg font-medium transition"
            >
              Add to Cart
            </button>

          </div>


        </div>

      </div>

    </main>
  );
}

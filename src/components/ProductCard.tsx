import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import type { Product } from "../types/Product";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const { addToCart } = useCart();

  return (
    <div className="group bg-[var(--card-bg)]/85 text-[var(--text-color)] backdrop-blur rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 flex flex-col">

      {/* Clickable image */}
      <Link to={`/product/${product.id}`} className="block overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full aspect-[5/4] object-contain bg-[var(--card-bg)]/0 p-2 transition-opacity duration-200 group-hover:opacity-90"
        />
      </Link>

      <div className="p-4 flex flex-col flex-grow">

        {/* Clickable title */}
        <Link to={`/product/${product.id}`}>
          <h3 className="font-heading text-lg text-[var(--h3-text-color)] hover:text-amber-300 transition-colors">
            {product.name}
          </h3>
        </Link>

        <p className="text-sm text-neutral-500 mt-1 line-clamp-2">
          {product.shortDescription}
        </p>

        {/* Bottom row */}
        <div className="mt-auto pt-4 flex items-center justify-between">
          <span className="text-[var(--price-text-color)] font-semibold text-lg">
            {product.price}
          </span>

          <button
            onClick={() => addToCart(product)}
            className="px-3 py-1.5 rounded-md bg-[var(--form-button)] hover:bg-emerald-600 active:bg-emerald-500 text-[var(--h1-text-color)] transition-colors duration-400 text-sm font-medium"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

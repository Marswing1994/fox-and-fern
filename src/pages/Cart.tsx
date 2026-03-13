import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, increaseQty, decreaseQty, removeFromCart } = useCart();
  const subtotal = cart.reduce((sum, item) => {
    const price = parseFloat(item.price.replace(/[^0-9.]/g, ""));
    return sum + price * item.quantity;
  }, 0);

const total = subtotal;

return (
  <main className="max-w-4xl mx-auto px-4 py-8 overflow-x-hidden">

    <h1 className="font-heading text-4xl mb-6 text-[var(--h1-text-color)] transition-colors duration-400 text-shadow-lg">Your Cart</h1>

    {cart.length === 0 ? (
      <div className="flex items-center justify-center py-20">
        <div className="max-w-md w-full bg-[var(--form-bg-color)]/70 transition-colors duration-400 rounded-2xl p-8 text-center shadow-xl space-y-5">

          <div className="text-5xl">🧺</div>

          <h2 className="font-heading text-3xl text-[var(--form-text-color)] transition-colors duration-400">
            Your cart is empty
          </h2>

          <p className="text-[var(--form-placeholder)] transition-colors duration-400 text-sm">
            You haven't selected a skin yet.
            Browse the shop to find something that fits your avatar.
          </p>

          <Link
            to="/shop"
            className="inline-block mt-2 px-6 py-2 bg-[var(--form-button)] hover:bg-emerald-600 rounded-lg transition text-[var(--h1-text-color)] transition-colors duration-400"
          >
            Browse Skins
          </Link>

        </div>
      </div>
    ) : (

      cart.map(item => (
        <div
          key={item.id}
          className="flex flex-col md:flex-row md:items-center gap-4 bg-[var(--form-bg-color)]/80 shadow-xl p-4 rounded-lg mb-3 text-[var(--form-text-color)] transition-colors duration-400"
        >

      {/* Product Image */}
          <Link to={`/product/${item.id}`} className="shrink-0">
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 object-contain bg-[var(--form-bg-color)] transition-colors duration-400 p-1 rounded-md hover:opacity-80 transition transition-colors duration-400"
            />
          </Link>

      {/* Product Info */}
          <div className="flex-grow">
            <Link to={`/product/${item.id}`}>
              <h3 className="font-heading text-[var(--form-text-color)] hover:text-amber-500 transition-colors">
                {item.name}
              </h3>
            </Link>

            <p className="text-sm text-[var(--form-placeholder)] transition-colors duration-400">{item.price}</p>
          </div>

      {/* Quantity Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => decreaseQty(item.id)}
              className="px-2 py-1 bg-neutral-700 rounded hover:bg-neutral-600 text-[var(--h1-text-color)] transition-colors duration-400"
            >
              −
            </button>

            <span className="w-6 text-center">{item.quantity}</span>

            <button
              onClick={() => increaseQty(item.id)}
              className="px-2 py-1 bg-neutral-700 rounded hover:bg-neutral-600 text-[var(--h1-text-color)] transition-colors duration-400"
            >
              +
            </button>

            <button
              onClick={() => removeFromCart(item.id)}
              className="text-[var(--remove)] hover:text-red-300 whitespace-nowrap transition-colors duration-400"
            >
              Remove
            </button>
          </div>

        </div>
      ))

    )}

    {cart.length > 0 && (
      <div className="mt-6">
        <Link
          to="/shop"
          className="inline-block px-4 py-2 bg-[var(--form-button)] hover:bg-emerald-600 text-[var(--h1-text-color)] rounded shadow-lg transition-colors duration-400"
        >
          Continue Shopping
        </Link>
      </div>
    )}

    {cart.length > 0 && (
      <div className="mt-8 bg-[var(--form-bg-color)]/80 shadow-xl p-6 rounded-xl max-w-md ml-auto space-y-2 text-[var(--form-text-color)] transition-colors duration-400">

        <div className="flex justify-between text-lg font-semibold">
          <span>Total</span>
          <span>L${total.toFixed(2)}</span>
        </div>

        <div className="border-t border-neutral-700 my-2"></div>

        <Link
          to="/checkout"
          className="block text-center mt-4 bg-[var(--form-button)] hover:bg-emerald-600 py-2 rounded-lg font-medium transition text-[var(--h1-text-color)] transition-colors duration-400"
        >
          Proceed to Checkout
        </Link>


      </div>
    )}



  </main>
);}

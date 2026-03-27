import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function Checkout() {
  const { cart } = useCart();
  const subtotal = cart.reduce((sum, item) => {
    const price = parseFloat(item.price.replace(/[^0-9.]/g, ""));
    return sum + price * item.quantity;
  }, 0);

  const conversionRate = 0.0031;
  const totalUSD = subtotal * conversionRate;

{totalUSD < 0.5 && (
  <p className="text-sm text-amber-400 mt-3 text-right">
    Stripe checkout requires purchases of at least $0.50 USD.
  </p>
)}

  const [form, setForm] = useState({
    name: "",
    email: "",
    avatarName: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  // Stripe minimum check
  if (totalUSD < 0.5) {
    alert("Stripe checkout requires purchases of at least $0.50 USD. Please add more items to your cart.");
    return;
  }

  // Save order locally BEFORE redirecting
  localStorage.setItem("order", JSON.stringify({ cart, form }));

  const response = await fetch("https://fox-and-fern.onrender.com/create-checkout-session", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      totalUSD: totalUSD
    }),
  });

  const session = await response.json();

  if (session.url) {
    window.location.href = session.url;
  } else {
    console.error("No Stripe session URL returned.");
  }};

  return (
  <main className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10">

    {/* Left — Customer Form */}
    <section>
      <h1 className="font-heading text-4xl mb-6 text-[var(--h1-text-color)] transition-colors duration-400 text-shadow-lg">Checkout</h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        <div>
          <label className="block text-sm text-neutral-400 mb-1">
            Your Name
          </label>
          <input
            name="name"
            onChange={handleChange}
            required
            className="shadow-lg w-full p-3 rounded-lg bg-[var(--form-input-bg)]/90 border border-[var(--form-border)] focus:outline-none focus:border-emerald-500 transition-colors duration-400"
          />
        </div>

        <div>
          <label className="block text-sm text-neutral-400 mb-1">
            Email
          </label>
          <input
            name="email"
            type="email"
            onChange={handleChange}
            required
            className="shadow-lg w-full p-3 rounded-lg bg-[var(--form-input-bg)]/90 border border-[var(--form-border)] focus:outline-none focus:border-emerald-500 transition-colors duration-400"
          />
        </div>

        <div>
          <label className="block text-sm text-neutral-400 mb-1">
            Second Life Avatar Name
          </label>
          <input
            name="avatarName"
            onChange={handleChange}
            required
            className="shadow-lg w-full p-3 rounded-lg bg-[var(--form-input-bg)]/90 border border-[var(--form-border)] focus:outline-none focus:border-emerald-500 transition-colors duration-400"
          />
        </div>

        <button
          onClick={handleSubmit}
          className={`w-full shadow-lg mt-4 py-3 rounded-lg font-medium transition text-[var(--h1-text-color)]
          ${
            totalUSD < 0.5
              ? "bg-gray-500 cursor-not-allowed opacity-70"
              : "bg-[var(--form-button)] hover:bg-emerald-600"
          }`}
        >
          Place Order
        </button>

      </form>
    </section>


    {/* Right — Order Summary */}
    <section className="shadow-lg bg-[var(--form-bg-color)]/85 rounded-xl p-6 h-fit transition-colors duration-400">

      <h2 className="font-heading text-2xl mb-4 text-[var(--form-text-color)] transition-colors duration-400">Order Summary</h2>

      <div className="space-y-3">
        {cart.map(item => (
          <div key={item.id} className="flex justify-between text-sm text-[var(--form-placeholder)]">
            <span>
              {item.name} × {item.quantity}
            </span>
            <span>{item.price}</span>
          </div>
        ))}
      </div>

  <div className="border-t border-neutral-700 my-4"></div>

    {/* L$ Subtotal */}
    <div className="flex justify-between text-neutral-500">
      <span>Subtotal (L$)</span>
      <span>L${subtotal.toFixed(2)}</span>
    </div>

    {/* USD Total */}
    <div className="mt-6">
      <div className="flex justify-between items-end">
        <span className="text-lg text-[var(--form-text-color)] transition-colors duration-400">
          Total (USD)
        </span>
        <span className="text-3xl font-bold text-[var(--total-color)] transition-colors duration-400">
          ${totalUSD.toFixed(2)}
        </span>
      </div>

      <p className="text-xs text-neutral-500 mt-2 text-right">
        Conversion rate: 1 L$ = $0.0031 USD
      </p>
    </div>

    </section>

  </main>
);
}

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Success() {
  const order = JSON.parse(localStorage.getItem("order") || "{}");

  const { clearCart } = useCart();
  
  const navigate = useNavigate();

  useEffect(() => {
    clearCart();

    const timer = setTimeout(() => {
      navigate("/shop", { replace: true });
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

return (
  <main className="min-h-[70vh] flex items-center justify-center px-4 mt-12">

    <div className="max-w-lg w-full bg-[var(--form-bg-color)]/90 transition-colors duration-400 rounded-2xl p-8 text-center shadow-xl space-y-6">

      {/* Success Icon */}
      <div className="text-5xl animate-pulse">✨</div>

      <h1 className="font-heading text-[var(--form-text-color)] transition-colors duration-400 text-3xl">
        Order Received
      </h1>

      <p className="text-[var(--form-placeholder)] transition-colors duration-400">
        Thank you,{" "}
        <span className="text-[var(--total-color)] font-semibold transition-colors duration-400">
          {order.form?.avatarName}
        </span>
        !
      </p>

      <p className="text-sm text-neutral-400">
        Your order has been submitted successfully.
      </p>

      {/* Order Summary */}
      {order.cart && order.cart.length > 0 && (
        <div className="bg-[var(--form-bg-color)] rounded-lg p-4 text-left space-y-2 transition-colors duration-400">

          <h2 className="font-heading text-[var(--form-text-color)] text-lg mb-2 text-center">
            Order Summary
          </h2>

          {order.cart.map((item: any) => (
            <div key={item.id} className="flex justify-between text-[var(--form-placeholder)] text-sm">
              <span>{item.name} × {item.quantity}</span>
              <span>{item.price}</span>
            </div>
          ))}

        </div>
      )}

      <p className="text-xs text-neutral-500">
        You will be redirected back to the shop shortly.
      </p>

      <button
        onClick={() => navigate("/shop")}
        className="mt-2 px-6 py-2 bg-[var(--form-button)] hover:bg-emerald-600 rounded-lg text-[var(--h1-text-color)] transition transition-colors duration-400"
      >
        Return to Shop
      </button>

    </div>

  </main>
);

}

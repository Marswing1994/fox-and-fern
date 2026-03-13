import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


export default function RequestCommission() {
  const [formData, setFormData] = useState({
    avatar: "",
    email: "",
    baseSkin: "",
    notes: "",
  });
  
  const [submitted, setSubmitted] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (!submitted) return;

    const timer = setTimeout(() => {
      navigate("/");
    }, 4000);

    return () => clearTimeout(timer);
  }, [submitted, navigate]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log("Commission submitted:", formData);
    localStorage.setItem("commissionRequest", JSON.stringify(formData));

    setSubmitted(true);
  }

  // Confirmation state instead of alert
  if (submitted) {
    return (
      <main className="min-h-[70vh] flex items-center justify-center px-4">
        <div className="max-w-lg w-full bg-[var(--form-bg-color)] rounded-2xl p-8 text-center shadow-lg space-y-5">
          <div className="text-5xl">🦊</div>
          <h1 className="font-heading text-[var(--form-text-color)] text-3xl">Request Sent!</h1>
          <p className="text-[var(--form-text-color)]">
            Your commission request has been received.
          </p>
          <p className="text-sm text-[var(--form-text-color)]">
            I’ll review the details and contact you soon to discuss pricing and details.
          </p>
          <p className="text-xs text-[var(--form-text-color)]">
            You will be returned to the home page shortly.
          </p>

          <button
            onClick={() => navigate("/")}
            className="mt-2 px-6 py-2 bg-[var(--form-button)] text-[var(--h1-text-color)] hover:bg-[var(--form-button-hover)] rounded-lg transition"
          >
            Return Home Now
          </button>

        </div>
      </main>
    );
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-12 space-y-8">

      <header className="text-center text-[var(--h1-text-color)] space-y-3 transition-colors duration-400">
        <h1 className="font-heading text-4xl text-shadow-lg">Request a Custom Skin</h1>
        <p className="bg-[var(--form-input-bg)]/50 rounded-lg p-2 text-[var(--form-text-color)] text-sm max-w-xl mx-auto shadow-lg transition-colors duration-300">
          Tell me about your character and what you’d like created.  
          The more detail you provide, the more accurate your quote will be.
        </p>
      </header>

      <form
        onSubmit={handleSubmit}
        className="bg-[var(--form-bg-color)]/90 rounded-2xl p-8 space-y-5 shadow-xl transition-colors duration-400"
      >

        {/* Avatar Name */}
        <div>
          <label className="block text-sm text-[var(--form-text-color)] mb-1 transition-colors duration-400">
            Avatar Name
          </label>
          <input
            name="avatar"
            value={formData.avatar}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-[var(--form-input-bg)] border border-[var(--form-border)] focus:outline-none focus:border-[var(--border-focus)] transition-colors duration-400"
          />
        </div>
        
        {/* Player E-mail */}
        <div>
          <label className="block text-sm text-[var(--form-text-color)] mb-1 transition-colors duration-400">
            E-mail:
          </label>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-[var(--form-input-bg)] border border-[var(--form-border)] focus:outline-none focus:border-[var(--border-focus)] transition-colors duration-400"
          />
        </div>

        {/* Base Skin */}
        <div>
          <label className="block text-sm text-[var(--form-text-color)] mb-1 transition-colors duration-400">
            Base Species / Existing Skin
          </label>
          <input
            name="baseSkin"
            value={formData.baseSkin}
            onChange={handleChange}
            placeholder="Ex: Kemono Fox, Human, Custom..."
            required
            className="w-full p-3 rounded-lg bg-[var(--form-input-bg)] border border-[var(--form-border)] focus:outline-none focus:border-[var(--border-focus)] placeholder:text-[var(--form-placeholder)] transition-colors duration-400"
          />
        </div>

        {/* Notes */}
        <div>
          <label className="block text-sm text-[var(--form-text-color)] mb-1 transition-colors duration-400">
            Description & Details
          </label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            rows={5}
            placeholder="Colors, markings, references, personality, style, etc..."
            required
            className="w-full p-3 rounded-lg bg-[var(--form-input-bg)] border border-[var(--form-border)] focus:outline-none focus:border-[var(--border-focus)] placeholder:text-[var(--form-placeholder)] text-[var(--form-placeholder)] resize-none transition-colors duration-400"
          />
        </div>

        <button
          type="submit"
          className="w-full mt-2 bg-[var(--form-button)] hover:bg-[var(--form-button-hover)] py-3 rounded-lg font-medium transition text-[var(--h1-text-color)] transition-colors duration-400"
        >
          Submit Commission Request
        </button>

      </form>

    </main>
  );
}

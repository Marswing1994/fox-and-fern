import ProductCard from "../components/ProductCard";
import products from "../data/products";

export default function Shop() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8">

      <h1 className="font-heading text-4xl text-[var(--h1-text-color)] mb-6 text-shadow-lg">Fox & Fern Styles</h1>

      <div className="
        grid gap-6
        grid-cols-2
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        xl:grid-cols-5
      ">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>

    </main>

    );
}

import LazyImage from "../../ui/LazyImage";
import { formatCurrency } from "../../utils/helpers";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li className="group flex flex-col overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      <div className="relative aspect-square overflow-hidden bg-stone-100">
        <LazyImage
          src={imageUrl}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {soldOut && (
          <span className="absolute inset-0 flex items-center justify-center bg-black/60 text-white">
            Sold out
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-lg font-semibold text-stone-900">{name}</h3>
        <p className="mt-1 text-sm text-stone-500">{ingredients.join(", ")}</p>

        <div className="mt-auto flex items-center justify-between pt-4">
          <span className="text-base font-bold text-red-600">
            {soldOut ? "—" : formatCurrency(unitPrice)}
          </span>

          <button
            disabled={soldOut}
            className={`rounded-full border-2 px-5 py-2 font-display text-sm font-bold transition ${
              soldOut
                ? "cursor-not-allowed border-stone-300 text-stone-400"
                : "border-basil-500 text-basil-500 hover:bg-basil-500 hover:text-white"
            }`}
          >
            Add to cart
          </button>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;

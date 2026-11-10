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
          <span className="absolute inset-0 flex items-center justify-center bg-black/60 text-sm font-semibold uppercase tracking-wider text-white">
            Sold out
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-3 sm:p-4">
        <h3 className="font-display text-base font-bold leading-tight text-stone-900 sm:text-lg">
          {name}
        </h3>
        <p className="mt-1 font-body text-xs text-stone-500 sm:text-sm">
          {ingredients.join(", ")}
        </p>

        <div className="mt-auto flex flex-col gap-2 pt-3 sm:flex-row sm:items-center sm:justify-between sm:pt-4">
          <span className="font-display text-base font-bold text-red-600">
            {soldOut ? "—" : formatCurrency(unitPrice)}
          </span>

          <button
            disabled={soldOut}
            className={`w-full whitespace-nowrap rounded-full border-2 px-3 py-1.5 font-display text-sm font-bold transition sm:w-auto md:px-5 md:py-2 ${
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

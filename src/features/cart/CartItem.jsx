import { formatCurrency } from "../../utils/helpers";

function CartItem({ item }) {
  const { pizzaId, name, quantity, unitPrice, totalPrice } = item;

  return (
    <li className="flex flex-wrap items-center gap-3 rounded-xl border border-stone-200 bg-white p-3 shadow-sm sm:flex-nowrap sm:gap-4 sm:p-4">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-mustard-100 text-2xl">
        🍕
      </div>
      <div className="min-w-0 flex-1">
        <p className="font-display font-bold leading-tight text-stone-900">
          {name}
        </p>
        <p className="text-sm text-stone-500">
          {quantity}&times; {formatCurrency(unitPrice)}
        </p>
      </div>
      {/* Quantity section */}
      <div className="flex w-full items-center justify-between sm:w-auto sm:gap-4">
        <div className="flex items-center gap-2">
          {/** Decrement Button */}
          <button
            type="button"
            disabled={quantity <= 1}
            aria-label="Decrease quantity"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-stone-300 text-stone-600 transition hover:border-basil-500 hover:bg-basil-500 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-basil-500/50 active:scale-90 disabled:cursor-not-allowed disabled:opacity-30"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M5 12h14" />
            </svg>
          </button>
          <span className="w-6 text-center text-sm font-bold text-stone-900">
            {quantity}
          </span>
          {/** Increment Button */}
          <button
            type="button"
            aria-label="Increase quantity"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-stone-300 text-stone-600 transition hover:border-basil-500 hover:bg-basil-500 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-basil-500/50 active:scale-90"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M12 5v14" />
            </svg>
          </button>
        </div>
        {/** Total price  */}
        <p className="font-body font-bold text-red-600">
          {formatCurrency(totalPrice)}
        </p>
      </div>
    </li>
  );
}

export default CartItem;

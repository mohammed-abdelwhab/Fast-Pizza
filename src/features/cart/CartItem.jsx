import { useState } from "react";
import { formatCurrency } from "../../utils/helpers";
import { incQuantity, decQuantity, removeItem } from "./cartSlice";
import { useDispatch } from "react-redux";
import ConfirmModal from "../../ui/confirmModal";
import pizzaHero from "../../assets/pizza.png";

function CartItem({ item }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { pizzaId, name, quantity, unitPrice } = item;
  const totalItemPrice = quantity * unitPrice;
  const dispatch = useDispatch();

  /** Handler Functions */
  function increment() {
    dispatch(incQuantity(pizzaId));
  }
  function decrement() {
    if (quantity <= 1) return;
    dispatch(decQuantity(pizzaId));
  }

  function handleRemoveItem() {
    dispatch(removeItem(pizzaId));
  }

  return (
    <li className="relative flex flex-wrap items-center gap-3 rounded-xl border border-stone-200 bg-white to-mustard-700 p-3 shadow-sm sm:flex-nowrap sm:gap-4 sm:p-4">
      <div className="flex w-14 shrink-0 items-center justify-center sm:w-20">
        <img
          src={pizzaHero}
          alt="happy meal"
          className="object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.2)]"
        />
      </div>
      <div className="min-w-0 flex-1">
        <p className="font-display font-bold leading-tight text-stone-900">
          {name}
        </p>
        <p className="text-sm text-stone-500">
          {quantity}&times; {formatCurrency(unitPrice)}
        </p>
      </div>
      {/* -------- Right section --------- */}
      <div className="flex w-full items-center justify-between sm:w-auto sm:gap-4">
        <div className="flex items-center gap-2">
          {/** Decrement Button */}
          <button
            type="button"
            disabled={quantity <= 1}
            aria-label="Decrease quantity"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-stone-300 text-stone-600 transition hover:border-basil-500 hover:bg-basil-500 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-basil-500/50 active:scale-90 disabled:cursor-not-allowed disabled:opacity-30"
            onClick={decrement}
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

          {/** --------- Quantity --------- */}

          <span className="w-6 text-center text-sm font-bold text-stone-900">
            {quantity}
          </span>
          {/** --------- Increment Button --------- */}
          <button
            type="button"
            aria-label="Increase quantity"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-stone-300 text-stone-600 transition hover:border-basil-500 hover:bg-basil-500 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-basil-500/50 active:scale-90"
            onClick={increment}
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
        <p className="font-display text-sm text-stone-700">
          {formatCurrency(totalItemPrice)}
        </p>
      </div>
      {/** --- The Delete button --- */}
      <button
        type="button"
        aria-label="Delete quantity"
        className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full border border-white bg-white text-stone-600 transition hover:border-red-400 hover:bg-red-500 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/50 active:scale-90 disabled:cursor-not-allowed disabled:opacity-30 sm:static sm:right-auto sm:top-auto"
        onClick={() => setIsModalOpen(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M3 6h18" />
          <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
          <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
          <line x1="10" y1="11" x2="10" y2="17" />
          <line x1="14" y1="11" x2="14" y2="17" />
        </svg>
      </button>

      {/** ------- Confirm modal ---------- */}
      <ConfirmModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleRemoveItem}
        title="Remove Item from Cart"
        message="Are you sure you want to remove this pizza?"
        isDestructive={false}
      />
    </li>
  );
}

export default CartItem;

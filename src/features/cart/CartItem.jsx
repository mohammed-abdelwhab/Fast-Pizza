import { formatCurrency } from "../../utils/helpers";

function CartItem({ item }) {
  const { pizzaId, name, quantity, unitPrice, totalPrice } = item;

  return (
    <li className="flex items-center gap-4 rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <div className="bg-mustard-100 flex h-14 w-14 shrink-0 items-center justify-center rounded-lg text-2xl">
        🍕
      </div>
      <div className="flex-1">
        <p className="font-display font-bold text-stone-900">{name}</p>
        <p className="text-sm text-stone-500">
          {quantity}&times; ${unitPrice.toFixed(2)}
        </p>
      </div>
      <div className="flex items-center gap-2">
        <button className="flex h-7 w-7 items-center justify-center rounded-full border border-stone-300 text-stone-600 hover:bg-stone-100">
          −
        </button>
        <span className="w-6 text-center text-sm font-bold text-stone-900">
          {quantity}
        </span>
        <button className="flex h-7 w-7 items-center justify-center rounded-full border border-stone-300 text-stone-600 hover:bg-stone-100">
          +
        </button>
      </div>
      <p className="font-body font-bold text-red-600">
        {formatCurrency(totalPrice)}
      </p>
    </li>
  );
}

export default CartItem;

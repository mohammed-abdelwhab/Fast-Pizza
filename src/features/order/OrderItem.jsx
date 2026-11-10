import { formatCurrency } from "../../utils/helpers";

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="flex items-center gap-4 rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <div className="bg-mustard-100 flex h-12 w-12 shrink-0 items-center justify-center rounded-lg text-xl">
        🍕
      </div>
      <div className="flex-1">
        <p className="font-display font-bold text-stone-900">
          {quantity}&times; {name}
        </p>
      </div>
      <p className="font-bold text-red-600">{formatCurrency(totalPrice)}</p>
    </li>
  );
}

export default OrderItem;

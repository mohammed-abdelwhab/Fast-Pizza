import { formatCurrency } from "../../utils/helpers";
import pizzaHero from "../../assets/pizza.png";

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="flex flex-wrap items-center gap-3 rounded-xl border border-stone-200 bg-white p-3 shadow-sm sm:flex-nowrap sm:gap-4 sm:p-4">
      <div className="flex w-14 shrink-0 items-center justify-center sm:w-20">
        <img
          src={pizzaHero}
          alt="happy meal"
          className="object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.2)]"
        />
      </div>
      <div className="flex-1">
        <p className="font-display text-sm font-semibold text-stone-900">
          {quantity}&times; {name}
        </p>
      </div>
      <p className="font-display text-xs text-stone-700">
        {formatCurrency(totalPrice)}
      </p>
    </li>
  );
}

export default OrderItem;

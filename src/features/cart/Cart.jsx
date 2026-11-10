import { Link } from "react-router-dom";
import LinkBtn from "../../ui/LinkBtn";
import CartItem from "./CartItem";

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function Cart() {
  const cart = fakeCart;
  const total = cart.reduce((sum, item) => sum + item.totalPrice, 0);

  return (
    <div className="mx-auto max-w-2xl px-6 py-3">
      <LinkBtn to={"menu"}>&larr; Back to menu</LinkBtn>

      <h2 className="mt-6 font-display text-3xl font-bold text-stone-900">
        Your cart
      </h2>

      <div className="mt-6 space-y-4">
        {cart.map((item) => (
          <CartItem key={item.pizzaId} item={item} />
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-stone-200 pt-6">
        <div>
          <p className="text-sm text-stone-500">Total</p>
          <p className="font-display text-2xl font-bold text-stone-900">
            ${total.toFixed(2)}
          </p>
        </div>
        <div className="flex gap-3">
          <button className="rounded-full border border-red-300 bg-red-500 px-6 py-2.5 text-sm font-bold text-stone-700 hover:bg-red-600">
            Clear cart
          </button>
          <button className="rounded-full border border-stone-300 px-6 py-2.5 text-sm font-bold text-stone-700 hover:bg-basil-500">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;

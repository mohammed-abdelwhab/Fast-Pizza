import LinkBtn from "../../ui/LinkBtn";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import ConfirmModal from "../../ui/ConfirmModal";
import { formatCurrency } from "../../utils/helpers";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteCart } from "./cartSlice";
import { useState } from "react";

function Cart() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cart = useSelector((state) => state.cart.cart);
  const total = useSelector((state) =>
    state.cart.cart.reduce(
      (acc, curr) => acc + curr.unitPrice * curr.quantity,
      0,
    ),
  );

  function handleConfirm() {
    navigate("/order/new");
  }
  function handleClear() {
    dispatch(deleteCart());
  }

  if (cart.length === 0) return <EmptyCart />;

  return (
    <div className="mx-auto max-w-2xl px-6 py-3">
      <LinkBtn to={"menu"}>&larr; Back to menu</LinkBtn>

      <h2 className="mt-6 font-display text-3xl font-bold text-stone-900">
        Your cart
      </h2>

      {/** ----- Cart Item Component ----- */}
      <div className="mt-6 space-y-4">
        {cart.map((item) => (
          <CartItem key={item.pizzaId} item={item} />
        ))}
      </div>

      {/** ----- Checkout Section ----- */}
      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-stone-400 pt-6">
        <div>
          <p className="text-sm text-stone-500">Total</p>
          <p className="font-display text-2xl font-bold text-stone-900">
            {formatCurrency(total)}
          </p>
        </div>
        <div className="flex gap-3">
          <button
            className="rounded-full border border-red-300 bg-red-500 px-6 py-2.5 font-body text-sm font-extrabold text-stone-300 hover:bg-red-600"
            onClick={() => setIsModalOpen(true)}
          >
            Clear cart
          </button>
          <button
            className="rounded-full border border-green-500 bg-basil-500 px-6 py-2.5 font-body text-sm font-extrabold text-stone-300 hover:bg-green-700"
            onClick={handleConfirm}
          >
            Confirm
          </button>
        </div>
      </div>
      {/** ------ Confirmation Modal ------------ */}
      <ConfirmModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleClear}
        title="Clear Cart"
        message="Are you sure you want to delete the cart?"
        isDestructive={true}
      />
    </div>
  );
}

export default Cart;

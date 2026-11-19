import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import LinkBtn from "../../ui/LinkBtn";
import { formatCurrency } from "../../utils/helpers";
import { useLocation } from "react-router-dom";
function CartOverview() {
  const cartArr = useSelector((state) => state.cart.cart);
  const totalNum = cartArr.reduce((acc, curr) => {
    acc = acc + curr.quantity;
    return acc;
  }, 0);
  const totalPrice = cartArr.reduce((acc, curr) => {
    acc = acc + curr.unitPrice * curr.quantity;
    return acc;
  }, 0);

  const { pathname } = useLocation();
  const condition = cartArr.length > 0 && pathname !== "/cart";
  const [isRendered, setIsRendered] = useState(condition);

  //** The cartOveriew shouldn't mount on empty cart or in the cart page */
  useEffect(() => {
    if (condition) setIsRendered(true);
  }, [condition]);

  function handleAnimationEnd(e) {
    if (e.target === e.currentTarget && !condition) {
      setIsRendered(false);
    }
  }

  if (!isRendered) return null;

  return (
    <div
      onAnimationEnd={handleAnimationEnd}
      className={`flex items-center justify-between gap-3 border-b-4 border-t-4 border-stone-950 bg-red-600 px-4 py-2 text-slate-50 sm:px-6 ${
        condition ? "animate-slide-up" : "animate-slide-down"
      }`}
    >
      <p className="flex items-center gap-2 whitespace-nowrap font-display text-xs font-bold tracking-wide sm:text-sm sm:tracking-widest md:gap-4 md:text-lg">
        <span className="hidden sm:inline">Summary:</span>
        <span>
          <span key={totalNum} className="inline-block animate-bump">
            {totalNum}
          </span>{" "}
          pizza{totalNum > 1 ? "s" : ""}
        </span>
        <span
          key={totalPrice}
          className="inline-block animate-bump text-stone-200"
        >
          {formatCurrency(totalPrice)}
        </span>
      </p>
      <LinkBtn to={"cart"}>Open cart &rarr;</LinkBtn>
    </div>
  );
}

export default CartOverview;

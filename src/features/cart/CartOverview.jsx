import { useSelector } from "react-redux";
import LinkBtn from "../../ui/LinkBtn";
import { formatCurrency } from "../../utils/helpers";

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
  return (
    cartArr.length > 0 && (
      <div className="animate-slide-up flex items-center justify-between gap-3 border-b-4 border-t-4 border-stone-950 bg-red-600 px-4 py-2 text-slate-50 sm:px-6">
        <p className="fo flex items-center gap-2 whitespace-nowrap font-display text-xs font-bold tracking-wide sm:text-sm sm:tracking-widest md:gap-4 md:text-lg">
          <span className="hidden sm:inline">Summary:</span>
          <span>
            <span key={totalNum} className="animate-bump inline-block">
              {totalNum}
            </span>{" "}
            pizza{totalNum > 1 ? "s" : ""}
          </span>
          <span
            key={totalPrice}
            className="animate-bump inline-block text-stone-200"
          >
            {formatCurrency(totalPrice)}
          </span>
        </p>
        <LinkBtn to={"cart"}>Open cart &rarr;</LinkBtn>
      </div>
    )
  );
}

export default CartOverview;

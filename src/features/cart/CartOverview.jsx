import LinkBtn from "../../ui/LinkBtn";

function CartOverview() {
  return (
    <div className="flex items-center justify-between gap-3 border-b-4 border-t-4 border-stone-950 bg-red-600 px-4 py-2 text-slate-50 sm:px-6">
      <p className="fo flex items-center gap-2 whitespace-nowrap font-display text-xs font-bold tracking-wide sm:text-sm sm:tracking-widest md:gap-4 md:text-lg">
        <span className="hidden sm:inline">Summary:</span>
        <span>23 pizzas</span>
        <span className="text-stone-200">$23.45</span>
      </p>
      <LinkBtn to={"cart"}>Open cart &rarr;</LinkBtn>
    </div>
  );
}

export default CartOverview;

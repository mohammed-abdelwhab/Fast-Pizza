import LinkBtn from "../../ui/LinkBtn";

function CartOverview() {
  return (
    <div className="flex items-center justify-between border-b-4 border-t-4 border-stone-950 bg-red-600 px-6 py-2 text-slate-50">
      <p className="space-x-2 font-serif text-sm font-bold tracking-widest md:space-x-4 md:text-lg">
        <span>Summary:</span>
        <span>23 pizzas</span>
        <span className="text-stone-200">$23.45</span>
      </p>
      <LinkBtn to={"cart"}>Open cart &rarr;</LinkBtn>
    </div>
  );
}

export default CartOverview;

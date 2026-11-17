import LinkBtn from "../../ui/LinkBtn";

function EmptyCart() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-8">
      {/* Top Navigation */}
      <div className="mb-6">
        <LinkBtn to={"menu"}>&larr; Back to menu</LinkBtn>
      </div>

      {/* Empty State Card */}
      <div className="flex flex-col items-center justify-center rounded-2xl border border-mustard-200 bg-cream-50 px-6 py-12 text-center shadow-sm">
        {/* Decorative Icon Badge */}
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-mustard-100 text-mustard-700 ring-4 ring-cream-100">
          <svg
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.75"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
        </div>

        {/* Heading & Message */}
        <h2 className="text-xl font-semibold text-stone-900">
          Your cart is empty
        </h2>
        <p className="mt-2 max-w-sm text-sm text-stone-700">
          Your cart is still empty. Start adding some delicious pizzas from our
          menu!
        </p>
      </div>
    </div>
  );
}

export default EmptyCart;

import { useRouteError } from "react-router-dom";
import LinkBtn from "../ui/LinkBtn";

function Error() {
  // we can get access to the error object through useRouterError custom hook
  const errorMessage = useRouteError();
  return (
    <div class="flex min-h-screen items-center justify-center bg-amber-50 p-6">
      <div class="w-full max-w-md rounded-2xl border-4 border-amber-200 bg-white p-8 text-center shadow-xl">
        <div class="mb-6 flex justify-center">
          <div class="flex h-24 w-24 items-center justify-center rounded-full bg-red-100 text-5xl">
            🍕
          </div>
        </div>

        <span class="rounded-full bg-red-100 px-3 py-1 text-xs font-extrabold uppercase tracking-widest text-red-600">
          Error 404
        </span>

        <h1 class="mt-4 text-3xl font-extrabold text-gray-900">
          Whoops! That slice went missing.
        </h1>

        <p class="mt-2 font-display text-lg font-bold tracking-wider text-red-600">
          {errorMessage?.data ||
            errorMessage?.error?.message ||
            errorMessage?.message ||
            "The page you’re looking for might have been eaten, moved, or never put in the oven."}
        </p>

        <div class="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4 text-left">
          <p class="text-xs font-semibold uppercase text-amber-800">
            Looking for dinner?
          </p>
          <p class="mt-1 text-xs text-amber-700">
            Let’s get you back to the menu before you get hungry.
          </p>
        </div>

        <div className="mt-2">
          <LinkBtn to={"menu"}>&larr; Back To Menu</LinkBtn>
        </div>
      </div>
    </div>
  );
}

export default Error;

import { useFetcher } from "react-router-dom";
import { updateOrder } from "../../services/apiRestaurant";

export async function action({ params }) {
  // The updateOrder func take the orderId and an object of the data we want to update --> priority
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}

function UpdateOrder() {
  const fetcher = useFetcher();
  const isLoading = fetcher.state === "loading";
  const isSubmitting = fetcher.state === "submitting";
  return (
    <fetcher.Form method="PATCH">
      <button
        disabled={isSubmitting}
        className="rounded-xl bg-red-600 px-2 py-2 font-body text-sm font-bold text-white shadow-sm transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75 disabled:cursor-not-allowed disabled:bg-stone-300"
      >
        {isLoading ? "please wait...." : "Prioritize Order ⚡"}
      </button>
    </fetcher.Form>
  );
}

export default UpdateOrder;

// Test ID: IIDSAT

import { useLoaderData } from "react-router-dom";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";
import { getOrder } from "../../services/apiRestaurant";
import LinkBtn from "../../ui/LinkBtn";

// Here the id sent as a param in the input search is received here with the loader function
export async function loader({ params }) {
  const id = params.orderId; // params.orderId the same param name in the route path
  const data = await getOrder(id);
  return data;
}

function Order() {
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const order = useLoaderData();
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="mx-auto max-w-2xl px-6 py-2 sm:py-10">
      <LinkBtn to={"menu"}>&larr; Back to menu</LinkBtn>

      <div className="mt-8">
        <p className="text-sm font-medium text-stone-500">Order #{id}</p>
        <div className="mt-2 flex flex-wrap items-center gap-3">
          {priority && (
            <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-bold text-red-700">
              Priority
            </span>
          )}
          <span className="font-display text-xl font-bold text-stone-900">
            {status} order
          </span>
        </div>
      </div>

      <div className="mt-6 rounded-xl border border-stone-200 bg-white p-6 shadow-sm">
        <p className="font-display text-lg font-bold text-stone-900">
          {deliveryIn >= 0
            ? `Only ${deliveryIn} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p className="mt-1 text-xs text-stone-500 sm:text-sm">
          Estimated delivery: {formatDate(estimatedDelivery)}
        </p>
      </div>

      <div className="mt-6 rounded-xl border border-stone-200 bg-white p-6 shadow-sm">
        <h3 className="font-display text-lg font-bold text-stone-900">
          Summary
        </h3>
        <dl className="mt-4 space-y-2 text-sm">
          <div className="flex justify-between">
            <dt className="text-stone-500">Pizzas</dt>
            <dd className="font-medium text-stone-900">
              {formatCurrency(orderPrice)}
            </dd>
          </div>
          {priority && (
            <div className="flex justify-between">
              <dt className="text-stone-500">Priority fee</dt>
              <dd className="font-medium text-stone-900">
                {formatCurrency(priorityPrice)}
              </dd>
            </div>
          )}
          <div className="flex justify-between border-t border-stone-200 pt-2">
            <dt className="font-bold text-stone-900">Total</dt>
            <dd className="font-bold text-stone-900">
              {formatCurrency(orderPrice + priorityPrice)}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}

export default Order;

import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import { useDispatch, useSelector } from "react-redux";
import LinkBtn from "../../ui/LinkBtn";
import EmptyCart from "../cart/EmptyCart";
import store from "../../store";
import { deleteCart } from "../cart/cartSlice";
import { useState } from "react";
import { formatCurrency } from "../../utils/helpers";
import { fetchAddress } from "../user/userSlice";
// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

// TODO: Creating Action function with the Form Component from react router to add data to the server

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  //? 1- Formatting the data to be an organized object with the fields we want to show in the Order.JSX component
  let order = {};
  order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "true",
  };

  //? 2- Adding some form validation "on phone number" before creating a new order (early return):
  const errors = {};
  if (!isValidPhone(order.phone) || order.phone.length < 11) {
    errors.phoneErr =
      "Please enter a valid 11 phone number that will be used in order deleviry";
  }

  if (Object.keys(errors).length > 0) return errors;

  //? 3- Creating a new order from the resturant's api method if no error happen:
  const newOrder = await createOrder(order);
  //! 4- !! clearing the cart , but this technique shouldn't be used frequently as we can't use the useDispatch hook outside of a component !!!!
  store.dispatch(deleteCart());

  //? 5- redirecting to the order details view (we can't use useNavigate hook outside a component so we use redirect() method from react router)
  return redirect(`/order/${newOrder.id}`);
}

function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);
  const dispatch = useDispatch();
  const {
    userName,
    error: errorLocation,
    position,
    status: statusLocation,
    address,
  } = useSelector((state) => state.user);
  const isLoadingLocation = statusLocation === "loading";

  /** Bug Fix:
   *   Adding a new key to the cart object so the order api method can work --> totalPrice "for each object not the overall total"  
   * */
  const cart = useSelector((state) =>
    state.cart.cart.map((item) => ({
      ...item,
      totalPrice: item.quantity * item.unitPrice,
    })),
  );
  //**Feat #1: show the new total if the user wants priority */
  // total with priority fee = cart total price * 0.2
  const totalWithPriorityFee =
    cart.reduce((acc, curr) => {
      acc = acc + curr.unitPrice * curr.quantity;
      return acc;
    }, 0) * 0.2;
  const formState = useNavigation();
  const isSubmitting = formState.state === "submitting";

  //**Feat #2: Getting the user location using async thunk */
  function handleFetchAddress(e) {
    e.preventDefault();
    dispatch(fetchAddress());
  }
  //! Consuming the errors object returned from the action function
  const formErrors = useActionData();

  //! validation: if the cart is empty show the empty cart page
  if (!cart.length) return <EmptyCart />;
  return (
    <div className="mx-auto max-w-xl px-6 py-2 sm:py-10">
      <h2 className="font-display text-3xl font-bold text-stone-900">
        Final Touches 🧑‍🍳
      </h2>
      {/** Using Form Component to submit the data */}
      <Form method="POST" className="mt-5 space-y-6">
        <div>
          <label
            htmlFor="customer"
            className="mb-1 block text-sm font-medium text-stone-600"
          >
            Full Name
          </label>
          <input
            className="w-full rounded-full border-2 border-stone-300 bg-white px-4 py-2.5 text-sm text-stone-900 transition-all duration-300 placeholder:text-stone-400 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-40"
            type="text"
            name="customer"
            id="customer"
            defaultValue={userName}
            required
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="mb-1 block text-sm font-medium text-stone-600"
          >
            Phone number
          </label>
          <input
            className="w-full rounded-full border-2 border-stone-300 bg-white px-4 py-2.5 text-sm text-stone-900 transition-all duration-300 placeholder:text-stone-400 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-40"
            type="tel"
            name="phone"
            id="phone"
            required
          />
          {formErrors?.phoneErr && (
            <p className="mt-2 text-sm font-medium text-red-600">
              {formErrors.phoneErr}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="address"
            className="mb-1 block text-sm font-medium text-stone-600"
          >
            Address
          </label>
          <div className="flex items-center justify-between gap-1">
            <input
              className="w-full rounded-full border-2 border-stone-300 bg-white px-4 py-2.5 text-sm text-stone-900 transition-all duration-300 placeholder:text-stone-400 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-40"
              type="text"
              name="address"
              id="address"
              required
              defaultValue={address}
              disabled={isLoadingLocation}
            />
            <button
              className="bottom-0 right-0 rounded-full bg-mustard-600 px-6 py-1.5 font-body text-xs font-semibold text-white shadow-sm transition hover:bg-mustard-700 focus:outline-none focus:ring-2 focus:ring-mustard-300 focus:ring-opacity-75 disabled:cursor-not-allowed disabled:bg-stone-300"
              onClick={handleFetchAddress}
              disabled={isLoadingLocation}
            >
              Get Position
            </button>
          </div>
          {errorLocation && (
            <p className="mt-2 text-sm font-medium text-red-600">
              {errorLocation}
            </p>
          )}
        </div>

        <div className="flex items-center gap-3">
          <input
            className="h-5 w-5 accent-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-40"
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label
            htmlFor="priority"
            className="text-sm font-medium text-stone-700"
          >
            Want to give your order priority?
          </label>
        </div>
        {/** Hidden input fields to pass data to the form action function  */}
        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <input
            type="hidden"
            name="position"
            value={
              position.latitude && position.longitude
                ? `lat:${position.latitude}, lng: ${position.longitude}`
                : ""
            }
          />
        </div>
        <div className="flex items-center justify-between gap-3">
          <button
            disabled={isSubmitting}
            className="rounded-full bg-red-600 px-8 py-3 font-body text-sm font-bold text-white shadow-sm transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75 disabled:cursor-not-allowed disabled:bg-stone-300"
          >
            {isSubmitting ? "Creating order..." : "Order now"}
          </button>
          {withPriority && (
            <span className="font-body text-xs text-stone-950">
              Extra Fees: {formatCurrency(totalWithPriorityFee)}
            </span>
          )}
          <LinkBtn to={"cart"}>&larr; Back to cart</LinkBtn>
        </div>
      </Form>
    </div>
  );
}

export default CreateOrder;

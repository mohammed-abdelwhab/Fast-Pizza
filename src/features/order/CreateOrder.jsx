import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import { useSelector } from "react-redux";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

// TODO: Creating Action function with the Form Component from react router to add data to the server

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  //? 1- Formatting the data to be an organized object with the fields we want to show in the Order.JSX component
  let order = {};
  order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "on",
  };
  // console.log(order);

  //? 2- Adding some form validation "on phone number" before creating a new order (early return):
  const errors = {};
  if (!isValidPhone(order.phone)) {
    errors.phoneErr =
      "Please enter a valid phone number that will be used in order deleviry";
  }
  if (Object.keys(errors).length > 0) return errors;

  //? 3- Creating a new order from the resturant's api method if no error happen:
  const newOrder = await createOrder(order);
  // console.log(newOrder);
  //? 4- redirecting to the order details view (we can't use useNavigate hook outside a component so we use redirect() method from react router)
  return redirect(`/order/${newOrder.id}`);
}

function CreateOrder() {
  // const [withPriority, setWithPriority] = useState(false);
  const user = useSelector((state) => state.user.userName);
  const cart = fakeCart;
  const formState = useNavigation();
  const isSubmitting = formState.state === "submitting";
  //! Consuming the errors object returned from the action function
  const formErrors = useActionData();
  // console.log(formErrors);
  return (
    <div className="mx-auto max-w-xl px-6 py-2 sm:py-10">
      <h2 className="font-display text-3xl font-bold text-stone-900">
        Ready to order? <br></br>Let's go!
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
            defaultValue={user}
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
          <input
            className="w-full rounded-full border-2 border-stone-300 bg-white px-4 py-2.5 text-sm text-stone-900 transition-all duration-300 placeholder:text-stone-400 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-40"
            type="text"
            name="address"
            id="address"
            required
          />
        </div>

        <div className="flex items-center gap-3">
          <input
            className="h-5 w-5 accent-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-40"
            type="checkbox"
            name="priority"
            id="priority"
          />
          <label
            htmlFor="priority"
            className="text-sm font-medium text-stone-700"
          >
            Want to give your order priority?
          </label>
        </div>
        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
        </div>
        <div>
          <button
            disabled={isSubmitting}
            className="rounded-full bg-red-600 px-8 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75 disabled:cursor-not-allowed disabled:bg-stone-300"
          >
            {isSubmitting ? "Creating order..." : "Order now"}
          </button>
        </div>
      </Form>
    </div>
  );
}

export default CreateOrder;

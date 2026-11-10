import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import Loader from "./Loader";

// The Applayout is: Header --> {some content based on the route} --> the cart overview as if it's a footer

function AppLayout() {
  // Making a generic loader to indicate any loading state in the app using useNavigation custom hook

  const { state: appState } = useNavigation();

  if (appState === "loading") return <Loader />;
  return (
    // <div className="grid h-screen grid-rows-[auto_1fr_auto] bg-gradient-to-br from-cream-50 via-mustard-50 to-mustard-200">
    <div className="grid h-dvh grid-rows-[auto_1fr_auto] overflow-x-hidden bg-gradient-to-b from-cream-50 via-mustard-100 to-mustard-300">
      <Header />
      {/* <div className="overflow-y-auto"> */}
      <div className="overflow-y-auto px-6 py-2 md:flex md:items-center md:justify-center md:py-4">
        <main className="mx-auto w-full max-w-7xl">
          {/** The outlet component acts like the children prop -->
           *      decides which component will be rendered in the nested child route
           */}
          <Outlet />
        </main>
      </div>
      <CartOverview />
    </div>
  );
}

export default AppLayout;

import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

// 1. Loading Data using loader function that is passed to the createBrowserRouter() function in the App.jsx
export async function loader() {
  const data = await getMenu();
  return data;
}

function Menu() {
  // 2. Consuming the loaded data to render the menu items using the custom hook from react router
  const menu = useLoaderData();

  return (
    <ul className="mx-3 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
      {menu.map((item) => (
        <MenuItem pizza={item} key={item.id} />
      ))}
    </ul>
  );
}

export default Menu;

import { Link } from "react-router-dom";
import SearchInput from "../features/order/SearchOrder";
import UserName from "../features/user/UserName";
import logo from "../assets/Logo.png";
function Header() {
  return (
    <header className="b0 mb-1 flex items-center justify-between bg-gradient-to-tr from-cream-50 via-mustard-100 to-mustard-300 px-4 py-0.5 backdrop-blur-md">
      <Link to="/" className="flex shrink-0 items-center">
        <img
          src={logo}
          alt="Fast Pizza"

          className="h-12 max-h-[56px] w-auto shrink-0 object-contain mix-blend-multiply md:h-14 md:max-h-[90px]"
        />
      </Link>
      <UserName />
      <SearchInput />
    </header>
  );
}

export default Header;

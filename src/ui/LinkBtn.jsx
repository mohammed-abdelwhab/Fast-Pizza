import { Link } from "react-router-dom";

function LinkBtn({ children, to }) {
  return (
    <Link
      to={`/${to}`}
      className="group relative font-serif text-xs font-bold italic tracking-widest text-stone-800 transition-colors duration-300 sm:text-lg"
    >
      {children}
      <span class="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-stone-800 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
    </Link>
  );
}

export default LinkBtn;

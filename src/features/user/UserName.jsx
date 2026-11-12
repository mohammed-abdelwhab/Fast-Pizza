import { useSelector } from "react-redux";

function UserName() {
  const user = useSelector((state) => state.user.userName);
  return (
    user && (
      <div className="min-w-0 flex-1 truncate text-center font-display text-xs font-bold tracking-tighter sm:text-sm md:text-lg">
        {user}
      </div>
    )
  );
}

export default UserName;

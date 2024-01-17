import { Outlet } from "react-router-dom";

export default function BaseStyles() {
  return (
    <div className="dark:bg-stone-950 dark:text-zinc-100 duration-200 min-h-screen">
      <Outlet />
    </div>
  );
}

import { Outlet } from "react-router-dom";

type Props = {
  children?: React.ReactNode;
};

export default function BaseStyles({ children }: Props) {
  return (
    <div className="dark:bg-stone-950 dark:text-zinc-100 duration-200 min-h-screen">
      {children ?? <Outlet />}
    </div>
  );
}

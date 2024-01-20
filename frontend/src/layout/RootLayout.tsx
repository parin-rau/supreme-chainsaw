import { Outlet } from "react-router-dom";
import Navbar from "../components/nav/Navbar";
import Sidebar from "../components/nav/Sidebar";

export default function RootLayout() {
  return (
    <>
      <Navbar />
      <div className="grid sm:grid-cols-[128px_auto]">
        <Sidebar />
        <div className="hidden sm:block" />
        <div className="pt-20 px-2">
          <Outlet />
        </div>
      </div>
    </>
  );
}

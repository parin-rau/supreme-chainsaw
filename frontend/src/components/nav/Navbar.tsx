import { useState } from "react";
import DarkModeIcon from "../icons/DarkModeIcon";
import ToggleButton from "../ui/ToggleButton";
import SearchBar from "./SearchBar";
import Hamburger from "../icons/Hamburger";
import { SlidingSidebar } from "./Sidebar";

export default function Navbar() {
  const [isOpenSidebar, setOpenSidebar] = useState(false);
  const [theme, setTheme] = useState<string>(localStorage.theme);

  const handleSidebarToggle = (isOpen?: boolean) => {
    if (isOpen === true || isOpen === false) {
      setOpenSidebar(isOpen);
    } else {
      setOpenSidebar((prev) => !prev);
    }
  };

  function handleThemeToggle() {
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      setTheme("light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      setTheme("dark");
    }
  }

  return (
    <>
      <div className="fixed top-0 z-10 w-full bg-slate-100 dark:bg-neutral-900 p-2 dark:border-b dark:border-zinc-800">
        <div className="flex flex-grow flex-row justify-between gap-2 items-center w-full ">
          <div className="hidden sm:block w-[128px] flex-shrink-0" />

          <ToggleButton
            className="block sm:hidden"
            type="button"
            onClick={handleSidebarToggle}
          >
            <Hamburger />
          </ToggleButton>

          <SearchBar />

          <ToggleButton onClick={handleThemeToggle}>
            <DarkModeIcon theme={theme} />
          </ToggleButton>
        </div>
      </div>
      <SlidingSidebar {...{ isOpenSidebar, handleSidebarToggle }} />
    </>
  );
}

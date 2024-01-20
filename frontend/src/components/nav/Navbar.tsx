import { useState } from "react";

export default function Navbar() {
  const [isOpenSidebar, setOpenSidebar] = useState(false);

  function handleSidebarToggle(isOpen?: boolean) {
    if (isOpen === true || isOpen === false) {
      setOpenSidebar(isOpen);
    } else {
      setOpenSidebar((prev) => !prev);
    }
  }

  return (
    <>
      <div className="fixed top-0 z-10 w-full bg-slate-100 dark:bg-neutral-900 p-2 dark:border-b dark:border-zinc-800">
        <div className="flex flex-grow flex-row justify-between gap-2 items-center w-full ">
          <div className="hidden sm:block w-[128px] flex-shrink-0" />
          <HamburgerToggle
            className="block sm:hidden"
            type="button"
            onClick={handleSidebarToggle}
          />
          <SearchBar />

          <ToggleButton onClick={handleThemeToggle}>
            <DarkModeIcon theme={theme} />
          </ToggleButton>
        </div>
      </div>
      <SidebarToggle {...{ isOpenSidebar, handleSidebarToggle }} />
    </>
  );
}

import LogoutButton from "../auth/LogoutButton";
import Hamburger from "../icons/Hamburger";
import ToggleButton from "../ui/ToggleButton";
import SidebarButton from "./SidebarButton";

type Props = {
  handleSidebarToggle?: (_v?: boolean) => void;
};

const SidebarContent = ({ handleSidebarToggle }: Props) => (
  <>
    <SidebarButton to="/" text="Home" toggleSidebar={handleSidebarToggle} />
    <LogoutButton />
  </>
);

export function Sidebar() {
  return (
    <div className="fixed z-20 top-0 left-0 h-screen w-32 m-0 p-2 hidden sm:flex flex-col gap-2 dark:bg-neutral-900 bg-slate-100 border-r dark:border-r-neutral-800 border-r-slate-200">
      <SidebarContent />
    </div>
  );
}

export function SlidingSidebar({
  isOpenSidebar,
  handleSidebarToggle,
}: {
  isOpenSidebar: boolean;
  handleSidebarToggle: (_v?: boolean) => void;
}) {
  return (
    isOpenSidebar && (
      <>
        <div className="fixed z-50 top-0 left-0 h-screen w-32 m-0 p-2 flex flex-col gap-2 dark:bg-neutral-900 bg-slate-100 border-r dark:border-r-neutral-800 border-r-slate-200">
          <ToggleButton onClick={handleSidebarToggle}>
            <Hamburger />
          </ToggleButton>

          <SidebarContent handleSidebarToggle={handleSidebarToggle} />
        </div>
        <div
          className="fixed z-40 w-screen h-screen bg-neutral-700 opacity-50 "
          onClick={() => handleSidebarToggle(false)}
        />
      </>
    )
  );
}

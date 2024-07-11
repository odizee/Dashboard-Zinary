import { useStore } from "../../hooks/useStore";
import { useSidebarToggle } from "../../hooks/useSidebarToggle";
import { cn } from "../../utils";
import { Button } from "../ui/button";
import { SidebarToggle } from "./SidebarToggle";
import { Menu } from "./menu";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import sidebar_image from "../../assets/sidebar_image.svg";

export function Sidebar() {
  const sidebar = useStore(useSidebarToggle, (state) => state);

  if (!sidebar) return null;

  return (
    <aside
      className={cn(
        "fixed top-0 left-0 z-20 h-screen -translate-x-full lg:translate-x-0 transition-[width] ease-in-out duration-300 bg-white",
        sidebar?.isOpen === false ? "w-[80px]" : "w-52"
      )}
    >
      <SidebarToggle isOpen={sidebar?.isOpen} setIsOpen={sidebar?.setIsOpen} />
      <div className=" h-full flex flex-col py-4  shadow-md dark:shadow-zinc-800">
        <Button
          className={cn(
            "transition-transform ease-in-out duration-300 m-3 px-0 bg-[#FF6600] p-3 h-14 hover:no-underline",
            sidebar?.isOpen === false
              ? "translate-x-1 justify-center"
              : "translate-x-0 justify-start px-2"
          )}
          variant="link"
          asChild
        >
          <div className="flex justify-between cursor-pointer">
            {sidebar?.isOpen ? (
              <h2 className="p-3 text-white text-sm font-bold hover:no-underline">
                General <br />
                Dashboard
              </h2>
            ) : (
              <h2 className="text-white text-sm font-bold ">GD</h2>
            )}
            {sidebar?.isOpen && (
              <div>
                <FaCaretUp color="#fff" />
                <FaCaretDown color="#fff" />
              </div>
            )}
          </div>
        </Button>
        <Menu isOpen={sidebar?.isOpen} />
        <div>
          <img src={sidebar_image} alt="" />
        </div>
      </div>
    </aside>
  );
}

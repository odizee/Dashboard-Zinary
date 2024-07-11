import { Outlet } from "react-router-dom";
import { useSidebarToggle } from "../hooks/useSidebarToggle";
import { useStore } from "../hooks/useStore";
import { cn } from "../utils";
import { Sidebar } from "../components/sidebar";
import Navbar from "../components/Navbar";

// import { cn } from "../utils";

const AppLayout = () => {
  const sidebar = useStore(useSidebarToggle, (state) => state);

  if (!sidebar) return null;

  return (
    <div className="bg-[#f8f8f8]">
      <Sidebar />
      <main
        className={cn(
          " bg-[#f8f8f8] dark:bg-zinc-900 transition-[margin-left] ease-in-out duration-300 px-6",
          sidebar?.isOpen === false ? "lg:ml-[80px]" : "lg:ml-52"
        )}
      >
        <Navbar />
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;

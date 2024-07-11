import { MenuIcon } from "lucide-react";

import { Button } from "../../components/ui/button";
import {
  Sheet,
  SheetHeader,
  SheetContent,
  SheetTrigger,
} from "../../components/ui/sheet";
import { Menu } from "./menu";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { cn } from "../../utils";

export function SheetMenu() {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden" asChild>
        <Button className="h-8" variant="outline" size="icon">
          <MenuIcon size={20} />
        </Button>
      </SheetTrigger>
      <SheetContent className="sm:w-72 px-3 h-full flex flex-col" side="left">
        <SheetHeader>
          <Button
            className={cn(
              "transition-transform ease-in-out duration-300 m-3 px-0 bg-[#FF6600] p-3 h-14"
            )}
            variant="link"
            asChild
          >
            <div className="flex text-left justify-between cursor-pointer">
              <h2 className="p-3 text-white text-sm font-bold hover:no-underline">
                General <br />
                Dashboard
              </h2>

              <div>
                <FaCaretUp color="#fff" />
                <FaCaretDown color="#fff" />
              </div>
            </div>
          </Button>
        </SheetHeader>
        <Menu isOpen />
      </SheetContent>
    </Sheet>
  );
}

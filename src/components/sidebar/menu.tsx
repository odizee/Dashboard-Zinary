"use client";

import { Ellipsis } from "lucide-react";

import { cn } from "../../utils";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "../ui/tooltip";
import { Link, useLocation } from "react-router-dom";
import { getMenuList } from "../../utils/menu-list";
import { CollapseMenuButton } from "./collapsibleMenuButton";
import { Separator } from "../ui/separator";

interface MenuProps {
  isOpen: boolean | undefined;
}

export function Menu({ isOpen }: MenuProps) {
  const usePathname = () => {
    const location = useLocation();
    return location.pathname;
  };
  const pathname = usePathname();
  const menuList = getMenuList(pathname);

  return (
    <ScrollArea className="[&>div>div[style]]:!block">
      <nav className="mt-8 h-full w-full">
        <ul className="flex flex-col min-h-[calc(100vh-48px-36px-16px-32px)] lg:min-h-[calc(100vh-32px-40px-32px)] items-start space-y-1 ">
          {menuList.map(({ groupLabel, menus }, index) => (
            <li
              className={cn("w-full mb-2.5", groupLabel ? "pt-5" : "")}
              key={index}
            >
              {(isOpen && groupLabel) || isOpen === undefined ? (
                <p className="text-sm font-medium text-muted-foreground px-4 pb-2 max-w-[248px] truncate">
                  {groupLabel}
                </p>
              ) : !isOpen && isOpen !== undefined && groupLabel ? (
                <TooltipProvider>
                  <Tooltip delayDuration={100}>
                    <TooltipTrigger className="w-full">
                      <div className="w-full flex justify-center items-center">
                        <Ellipsis className="h-5 w-5" />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent side="right">
                      <p>{groupLabel}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ) : (
                <p className="pb-2"></p>
              )}
              {menus.map(
                ({ href, label, icon: Icon, active, submenus }, index) =>
                  submenus.length === 0 ? (
                    <div className="w-full mb-2.5" key={index}>
                      <TooltipProvider disableHoverableContent>
                        <Tooltip delayDuration={100}>
                          <TooltipTrigger asChild>
                            <div className="relative">
                              {active && (
                                <Separator
                                  orientation="vertical"
                                  className="bg-[#EC681C] h-full absolute top-0 left-[0px] w-[3px] z-50"
                                />
                              )}

                              <Button
                                variant={active ? "secondary" : "ghost"}
                                className={`${
                                  active && "bg-[#FDEFE7]"
                                } w-full justify-start h-10 hover:bg-[#FDEFE7] rounded-none p-6 relative  ${
                                  !isOpen && "items-center flex justify-center"
                                }`}
                                asChild
                              >
                                <Link to={href}>
                                  <span
                                    className={cn(
                                      isOpen === false ? "" : "mr-4"
                                    )}
                                  >
                                    <img
                                      src={Icon}
                                      alt={label}
                                      className="!w-max-fit"
                                    />
                                  </span>
                                  <p
                                    className={cn(
                                      "max-w-[200px] truncate font-bold text-[#676767aa]",
                                      isOpen === false
                                        ? "-translate-x-96 opacity-0 hidden"
                                        : "translate-x-0 opacity-100",
                                      active && "text-[#505050] "
                                    )}
                                  >
                                    {label}
                                  </p>
                                </Link>
                              </Button>
                            </div>
                          </TooltipTrigger>
                          {isOpen === false && (
                            <TooltipContent side="right">
                              {label}
                            </TooltipContent>
                          )}
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  ) : (
                    <div className="w-full" key={index}>
                      <CollapseMenuButton
                        icon={Icon}
                        label={label}
                        active={active}
                        submenus={submenus}
                        isOpen={isOpen}
                      />
                    </div>
                  )
              )}
            </li>
          ))}
        </ul>
      </nav>
    </ScrollArea>
  );
}

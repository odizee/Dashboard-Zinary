"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { cn } from "../../utils";
import { Button } from "../ui/button";
import { DropdownMenuArrow } from "@radix-ui/react-dropdown-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "../ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSeparator,
} from "../ui/dropdown-menu";
import { Link } from "react-router-dom";
import { Separator } from "../ui/separator";

type Submenu = {
  href: string;
  label: string;
  active: boolean;
};

interface CollapseMenuButtonProps {
  icon: string;
  label: string;
  active: boolean;
  submenus: Submenu[];
  isOpen: boolean | undefined;
}

export function CollapseMenuButton({
  icon: Icon,
  label,
  active,
  submenus,
  isOpen,
}: CollapseMenuButtonProps) {
  const isSubmenuActive = submenus.some((submenu) => submenu.active);
  const [isCollapsed, setIsCollapsed] = useState<boolean>(isSubmenuActive);

  return isOpen ? (
    <Collapsible
      open={isCollapsed}
      onOpenChange={setIsCollapsed}
      className="w-full"
    >
      <CollapsibleTrigger
        className="[&[data-state=open]>div>div>svg]:rotate-180 mb-1"
        asChild
      >
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
              active && "bg-[#FDEFE7] text-[#505050]"
            } w-full justify-start h-10 hover:bg-[#FDEFE7] rounded-none p-6 relative text-sm font-bold`}
          >
            <div className="w-full items-center flex justify-between">
              <div className="flex items-center">
                <span className="mr-4">
                  <img src={Icon} alt={label} className="w-max-fit" />
                </span>
                <p
                  className={cn(
                    "max-w-[150px] truncate text-[#676767aa]",
                    isOpen
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-96 opacity-0",
                    active && "text-[#505050]"
                  )}
                >
                  {label}
                </p>
              </div>
              <div
                className={cn(
                  "whitespace-nowrap",
                  isOpen
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-96 opacity-0"
                )}
              >
                <ChevronDown
                  size={18}
                  className={cn(
                    "transition-transform duration-200",
                    isCollapsed && "rotate-180"
                  )}
                />
              </div>
            </div>
          </Button>
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
        {submenus.map(({ href, label, active }, index) => (
          <Button
            key={index}
            variant={"ghost"}
            className={cn(
              "w-full justify-start h-10 mb-1",
              active && "!bg-[#FDEFE7] rounded-none"
            )}
            asChild
          >
            <Link to={href}>
              <span className="mr-4 ml-2"></span>
              <p
                className={cn(
                  "max-w-[170px] truncate text-[#505050]",
                  isOpen
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-96 opacity-0"
                )}
              >
                {label}
              </p>
            </Link>
          </Button>
        ))}
      </CollapsibleContent>
    </Collapsible>
  ) : (
    <DropdownMenu>
      <TooltipProvider disableHoverableContent>
        <Tooltip delayDuration={100}>
          <TooltipTrigger asChild>
            <DropdownMenuTrigger asChild>
              <div className="relative">
                <div>
                  {active && (
                    <Separator
                      orientation="vertical"
                      className="bg-[#EC681C] h-10 absolute top-0 left-[0px] w-[3px] z-50"
                    />
                  )}
                </div>
                <Button
                  variant={"ghost"}
                  className={cn(
                    `w-full justify-start h-10 mb-1`,
                    active && "bg-[#FDEFE7] rounded-none"
                  )}
                >
                  <div className="w-full items-center flex justify-center">
                    <div className="flex items-center">
                      <span className={cn(isOpen === false ? "" : "mr-4")}>
                        <img src={Icon} alt={label} className="!w-max-fit" />
                      </span>
                      <p
                        className={cn(
                          "max-w-[200px] truncate",
                          isOpen === false ? "opacity-0 hidden" : "opacity-100"
                        )}
                      >
                        {label}
                      </p>
                    </div>
                  </div>
                </Button>
              </div>
            </DropdownMenuTrigger>
          </TooltipTrigger>
          <TooltipContent side="right" align="start" alignOffset={2}>
            {label}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <DropdownMenuContent side="right" sideOffset={25} align="start">
        <DropdownMenuLabel className="max-w-[190px] truncate">
          {label}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {submenus.map(({ href, label }, index) => (
          <DropdownMenuItem key={index} asChild>
            <Link className="cursor-pointer" to={href}>
              <p className="max-w-[180px] truncate">{label}</p>
            </Link>
          </DropdownMenuItem>
        ))}
        <DropdownMenuArrow className="fill-border" />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

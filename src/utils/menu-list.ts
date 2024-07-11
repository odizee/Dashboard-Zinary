type Submenu = {
  href: string;
  label: string;
  active: boolean;
};

type Menu = {
  href: string;
  label: string;
  active: boolean;
  icon: string;
  submenus: Submenu[];
};

import dashboard from "../assets/dashboard.svg";
import money from "../assets/money.svg";
import user from "../assets/user.svg";
import discount from "../assets/discount.svg";
import wallet from "../assets/wallet.svg";
import staff from "../assets/staff.svg";
import audit from "../assets/audit.svg";
import settings from "../assets/settings.svg";

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "",
          label: "Dashboard",
          active: pathname.includes("/dashboard"),
          icon: dashboard,
          submenus: [
            {
              href: "/dashboard/short-loan",
              label: "Short Loan",
              active: pathname === "/dashboard/short-loan",
            },
            {
              href: "/dashboard/installment-loan",
              label: "Installment Loan",
              active: pathname === "/dashboard/installment-loan",
            },
          ],
        },
        {
          href: "/loans",
          label: "Loans",
          active: pathname.includes("/loans"),
          icon: money,
          submenus: [],
        },
        {
          href: "/transactions",
          label: "Transactions",
          active: pathname.includes("/transactions"),
          icon: user,
          submenus: [],
        },
        {
          href: "/users",
          label: "Users",
          active: pathname.includes("/users"),
          icon: user,
          submenus: [],
        },
        {
          href: "/payments",
          label: "Payments",
          active: pathname.includes("/payments"),
          icon: discount,
          submenus: [],
        },
        {
          href: "/wallet",
          label: "Wallet",
          active: pathname.includes("/wallet"),
          icon: wallet,
          submenus: [],
        },
        {
          href: "/staff",
          label: "Staff",
          active: pathname.includes("/staff"),
          icon: staff,
          submenus: [],
        },
        {
          href: "/audit",
          label: "Audit Trail",
          active: pathname.includes("/audit"),
          icon: audit,
          submenus: [],
        },
        {
          href: "/settings",
          label: "Settings",
          active: pathname.includes("/settings"),
          icon: settings,
          submenus: [],
        },
      ],
    },
  ];
}

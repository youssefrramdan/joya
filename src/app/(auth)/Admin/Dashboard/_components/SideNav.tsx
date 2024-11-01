"use client";
import React from "react";

import {
  
  HomeIcon,
  LayoutDashboard,
  PhoneIcon,
  Workflow, 
  
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function SideNav() {
  const MenuOption: MenuOptsTypes[] = [
    {
      id: 0,
      name: "Dashboard",
      path: "/Admin/Dashboard",
      icon: LayoutDashboard,
    },
    {
      id: 1,
      name: "Projects",
      path: "/Admin/Dashboard/Projects",
      icon: LayoutDashboard,
    },
    {
      id: 2,
      name: "About US",
      path: "/Admin/Dashboard/About-US",
      icon: Workflow,
    },
    {
      id: 3,
      name: "Home",
      path: "/Admin/Dashboard/Home",
      icon: HomeIcon,
    },
    {
      id: 4,
      name: "Contact US",
      path: "/Admin/Dashboard/Contact-US",
      icon: PhoneIcon,
    },
  ];
  const path = usePathname();
  console.log(path);

  return (
    <div className="w-64 h-screen bg-gradient-to-b from-[#041d1a] to-[#041d1a] shadow-lg p-6">
      <div className="grid gap-5">
        {MenuOption.map((item, index) => (
          <Link key={index} href={item.path}>
            <div
              className={`flex items-center gap-4 p-4  text-[#faf8f7] rounded-lg transition duration-300 hover:bg-[#354948] hover:shadow-lg hover:scale-105 transform  cursor-pointer ${
                path == item.path
                  ? "bg-[#354948] shadow-lg scale-105 "
                  : "bg-[#3d6a64]"
              }`}
            >
              <item.icon className="w-6 h-6 text-[#faf8f7] hover:text-[#f1f0ec] transition duration-300" />
              <h2 className="font-semibold text-lg">{item.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SideNav;

export interface MenuOptsTypes {
  id: number;
  name: string;
  path: string;
  icon: React.ElementType;
}

import React from "react";
import Image from "next/image"; 
import Man from "@/public/man.png"
import { useSelector, useDispatch } from "react-redux";
import { RxHamburgerMenu } from "react-icons/rx";
import { toggleSidebar } from "@/store/sidebarSlice"; 
import Link from "next/link"; 

function Header() {
  const dispatch = useDispatch();
  const isSidebarOpen = useSelector((state) => state.sidebar.isOpen);

  const togglebar = () => {
    dispatch(toggleSidebar());
  };

  const capitalizeName = (name) =>
    name
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

  return (
    <div className="flex w-full justify-between mt-2 p-4 items-center border-b border-b-violet-100">
      <div className="text-4xl lg:hidden cursor-pointer">
        <RxHamburgerMenu
          onClick={togglebar}
          aria-label={isSidebarOpen ? "Close Sidebar" : "Open Sidebar"} 
        />
      </div>

      <div className="flex-grow"></div>

      <div className="flex items-center space-x-3 cursor-pointer hover:scale-105 transition-all duration-300">
        <div className="flex flex-col items-center border-2 border-l-violet-200 rounded-lg p-2 mr-3">
          <Link href="/" className="flex items-center gap-2">
            <Image 
              src={Man} 
              alt="user" 
              width={48} 
              height={48} 
            />
            <p className="text-sm font-bold mr-2">{capitalizeName("kunal singla")}</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;

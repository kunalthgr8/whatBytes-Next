"use client";
import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BsTextParagraph } from "react-icons/bs";
import { SlBadge } from "react-icons/sl";
import { TiDocument } from "react-icons/ti";
import { toggleSidebar } from "@/store/sidebarSlice";
import Link from "next/link";

const NAV_ITEMS = [
  {
    name: "Dashboard",
    slug: "/",
    icon: BsTextParagraph,
    color: "text-black",
  },
  {
    name: "Skill Test",
    slug: "/skill-test",
    icon: SlBadge,
    color: "text-black",
  },
  {
    name: "Internship",
    slug: "/Internship", 
    icon: TiDocument,
    color: "text-black",
  },
];

const NavItem = React.memo(({ item, isActive, onClick }) => (
  <Link href={item.slug} passHref>
    <li
      className={`flex items-center gap-3 text-base font-medium cursor-pointer p-3 rounded-md hover:text-violet-400 transition-colors duration-200 ${
        isActive
          ? "text-violet-600 bg-violet-100 rounded-lg rounded-r-3xl"
          : item.color
      } text-gray-600`}
      onClick={onClick}
      aria-current={isActive ? "page" : undefined}
    >
      <item.icon className="text-lg" />
      {item.name}
    </li>
  </Link>
));

const HeaderSidebar = () => { 
  const dispatch = useDispatch();
  const isSidebarOpen = useSelector((state) => state.sidebar.isOpen);
  const sidebarRef = useRef(null);

  const handleOutsideClick = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      dispatch(toggleSidebar());
    }
  };

  useEffect(() => {
    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isSidebarOpen, handleOutsideClick]);

  return (
    <>
      {isSidebarOpen && (
        <div
          ref={sidebarRef}
          className="w-[250px] fixed top-0 bg-white left-0 h-full transform transition-transform duration-300 z-50 shadow-lg border border-r-violet-100"
          aria-label="Sidebar Navigation"
        >
          <div className="mt-10 mb-10 self-center text-center border-b border-b-violet-100">
            <h1 className="text-black text-4xl md:text-3xl sm:text-2xl font-bold tracking-wide">
              WhatBytes
            </h1>
          </div>
          <div className="h-full pt-8 p-4 flex flex-col">
            <ul className="space-y-4">
              {NAV_ITEMS.map((item) => {
                const isActive = window.location.pathname === item.slug; 
                return (
                  <NavItem
                    key={item.slug}
                    item={item}
                    isActive={isActive}
                    onClick={() => dispatch(toggleSidebar())} 
                  />
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

HeaderSidebar.displayName = "HeaderSidebar";

export default HeaderSidebar;

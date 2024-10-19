"use client";
import StoreProvider from "./StoreProvider";
import "./globals.css";
import Header from "@/components/Header/Header";
import Sidebar from "@/components/Sidebar/Sidebar";
import HeaderSidebar from "@/components/HeaderSidebar/HeaderSidebar";

export default function RootLayout({ children }) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className="antialiased">
          <div className="flex h-screen w-full">
            <div className="w-1/6 md:w-1/5 sm:w-1/4 h-full hidden lg:block">
              <Sidebar />
            </div>
            <HeaderSidebar />
            <div className="flex flex-col w-full h-full flex-grow overflow-y-auto">
              <Header />
              {children}
            </div>
          </div>
        </body>
      </html>
    </StoreProvider>
  );
}

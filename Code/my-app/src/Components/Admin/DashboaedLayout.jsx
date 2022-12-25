import React from "react"
import NavBar from "./NavBar"
import Sidebar from "./SideBar"

export default function DashboaedLayout({children}) {
    return (
        <>
        <NavBar />
        <div className="flex h-96 max-h-full">
        <Sidebar />

         <main className="flex-1 w-32 px-5">{children}</main>
        </div>
        
      </>
    );
  }


import Nav from "@/components/navigation";
import React from "react";

export default function Layout ({children} : {children : React.ReactNode}) {
  return (
    <div className="layout">
        <Nav />
        {children}
    </div>
  );
}
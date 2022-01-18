import React from "react";
import Nav from "./nav";


function Header({children}) {
  return (
    <header className="w-full text-center mb-10">
      <Nav></Nav>
      {children}
    </header>
  );
}

export default Header;

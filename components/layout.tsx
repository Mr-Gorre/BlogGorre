import React from "react";
import Footer from "./footer";
import Header from "./header";


function Layout({ children }) {
  return (
    <>
      <div className="container mx-auto">
        <Header>
        </Header>
        <div className="text-center">
          {children}
        </div>
        <Footer>
          foot
        </Footer>
      </div>
    </>
  )
}

export default Layout;

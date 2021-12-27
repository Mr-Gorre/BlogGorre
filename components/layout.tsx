import React from "react";
import Footer from "./footer";
import Header from "./header";


function Layout({ children }) {
  return (
    <>
    <Header>
      head
    </Header>
        {children}
    <Footer>
        foot
    </Footer>
    </>
  )
}

export default Layout;

import Link from "next/link";
import React from "react";


function Nav(){
  return(
    <nav>
      <Link href={'/'}>
        <a> Home </a>
      </Link>
      |
      <Link href={'/posts'}>
        <a> Posts </a>
      </Link>
    </nav>
  );
}


export default Nav;

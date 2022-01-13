import Link from "next/link";
import React from "react";


function Posts() {
  return(
    <>
      <ul className="text-center">
        <li>
          <Link href={'/posts/first-post'}>Пост 1</Link>
        </li>
        <li>
          <Link href={'/posts/about-first-post'}>Пост 2</Link>
        </li>
      </ul>
    </>
  );
}


export default Posts;
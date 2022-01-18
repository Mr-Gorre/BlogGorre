import Link from "next/link";
import React from "react";


interface Post {
  id: number,
  title: string,
  url: string,
  description?: string,
  publish_date?: Date
}

function Posts() {

  const posts: Post[] = [
    {
      id: 1,
      title: "Post 1",
      url: "/posts/first-post"
    },
    {
      id: 2,
      title: "Post 2",
      url: "/posts/about-first-post"
    }
  ]
  const postList = posts.reverse().map((post) =>
    <li key={post.id}>
      <Link href={post.url}>{post.title}</Link>
    </li>
  )
  return(
    <>
      <ul className="text-center">
        {postList}
      </ul>
    </>
  );
}


export default Posts;

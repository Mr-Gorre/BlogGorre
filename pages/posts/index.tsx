import Link from "next/link";
import React from "react";
import Post, { IPost } from "../../components/post";


function Posts() {

  const posts: IPost[] = [
    {
      id: 1,
      title: "Кодер рожает блогера",
      url: "/posts/first-post",
      description: "Делаем быстренько сайт и заливаем на прод, не профессионально, но быстро и работает"
    },
    {
      id: 2,
      title: "Попытки в контент",
      url: "/posts/about-first-post",
      description: "Приводим немного сайт в порядок что бы не совсем страшно было"
    }
  ]
  const postList = posts.reverse().map((post) =>
    <Post key={post.id} post={post}></Post>
  )
  return(
    <>
      <div>
        {postList}
      </div>
    </>
  );
}


export default Posts;

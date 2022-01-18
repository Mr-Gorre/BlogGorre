import Link from "next/link";
import { type } from "os";
import React from "react";


interface IPost {
  id: number,
  title: string,
  url: string,
  description?: string,
  publish_date?: Date
}

interface IProps {
  post: IPost
}


function Post({...props}: IProps) {

  const post =props.post
  return(
    <div className="post group">
      <Link href={post.url}>
        <div>

        <a className="group-hover:underline">
          {post.title}
        </a>
        <p>
          {post.description}
        </p>
        </div>
      </Link>
    </div>
  )
}

export type {IPost};
export default Post;

import Link from "next/link"
import React from "react"

function Index() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
      <Link href={'/about'}>
        <a>About</a>
      </Link>
    </div>
  )
}


export default Index
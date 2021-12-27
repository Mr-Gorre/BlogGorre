import Link from "next/link"
import React from "react"
import Layout from "../components/layout"

function Index() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
      <Link href={'/about'}>
        <a>About</a>
      </Link>
    </Layout>
  )
}


export default Index

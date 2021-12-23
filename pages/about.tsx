import Link from "next/link";
import React from "react";



function About() {
  return (
    <>
      <div className="p-6 bg-black max-w-sm mx-auto text-white rounded-xl flex space-x-4">
        <div className="shrink-0">
          <img src="/images/profile.jpg" alt="" className="h-12 w-12" />
        </div>
        <div>
          <div className="text-xl font-medium">
            Hello, world!
          </div>
          <p className="text-gray-500">Igor Potashev </p>
        </div>
      </div>
      <Link href={'/'}>
        <a>Back home</a>
      </Link>
    </>
  )
}

export default About;
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Layout from "../components/layout";



function About() {
  return (
    <>
      <div className="p-6 bg-black max-w-sm mx-auto text-white rounded-xl flex space-x-4">
        <div className="shrink-0">
          <div className="h-12 w-12">
            <Image src={"/images/profile.jpg"} width={100} height={100} className="rounded-full" alt="Igor Potashev"/>
          </div>
        </div>
        <div>
          <div className="text-xl font-medium">
            Hello, world!
          </div>
          <p className="text-gray-500">Igor Potashev </p>
        </div>
      </div>
    </>
  );
}

export default About;

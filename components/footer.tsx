import React from "react";

import { FaVk, FaGithub } from 'react-icons/fa'

function Footer({ children }) {
  return (
    <footer className="flex flex-row">
      <div className="basis-1/3">
        counter
      </div>
      <div className="basis-1/3">
        AD
      </div>
      <div className="basis-1/3 p-6">
        <ol>
          <li className="">
            <a href="https://vk.com/MrGorre" className="text-slate-600 hover:text-slate-900" target={'_blank'}>
              <FaVk className="inline-block text-3xl m-2 align-middle" />
              vk.com/MrGorre</a>
          </li>
          <li>
            <a href="https://github.com/Mr-Gorre" className=" text-slate-600 hover:text-slate-900" target={'_blank'}>
              <FaGithub className=" inline-block text-3xl m-2 align-middle" />
              <span>
              github.com/Mr-Gorre
              </span>
            </a>
          </li>
        </ol>
      </div>
    </footer>
  )
}

export default Footer

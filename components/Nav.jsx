"use client";

import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [show, setShow] = useState(false);
  return (
    <nav className="bg-slate-800 shadow-lg text-white">
      <div className="p-4 mx-5 flex flex-wrap justify-between items-center">
        <div className="inline-flex items-center">
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-current text-white h-8 w-8 mr-2"
          >
            <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
          </svg>
          <span className="text-2xl">Tailwind CSS</span>
        </div>
        <div className="md:hidden flex items-center">
          <button
            className="outline-none mobile-menu-button"
            onClick={() => setShow(!show)}
          >
            <svg
              className="w-6 h-6 text-gray-500"
              x-show="!showMenu"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        <div
          className={`${
            !show && "hidden"
          } w-full md:flex md:items-center md:w-auto`}
        >
          <ul className="pt-4 md:flex md:justify-between md:pt-0">
            <li className="nav-links">
              <Link href="/">Home</Link>
            </li>
            <li className="nav-links">
              <Link href="/sign-in">Sign In</Link>
            </li>
            <li className="nav-links">
              <Link href="/sign-up">Sign Up</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

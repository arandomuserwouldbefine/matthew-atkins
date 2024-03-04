"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiSun } from "react-icons/fi";
import { IoMoonSharp } from "react-icons/io5";

export default function Header() {
  const pathname = usePathname();
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkModeChange = () => {
    setDarkMode(!darkMode)
    if(!darkMode){
      document.querySelector("html")?.classList.add("dark")
    }else{
      document.querySelector("html")?.classList.remove("dark")
    }
  }

  return (
    <div className="border rounded-full px-8 sm:px-10 py-3">
      <ul className="flex items-center gap-12 text-lg lg:text-xl">
        <li>
          <Link
            href="/"
            className={pathname == "/" ? "border-b-2 border-blue-600" : ""}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className={
              pathname == "/contact" ? "border-b-2 border-blue-600" : ""
            }
          >
            Contact
          </Link>
        </li>
        <li className="flex items-center">
          <button onClick={handleDarkModeChange}>
            {!darkMode ? <FiSun /> : <IoMoonSharp />}
          </button>
        </li>
      </ul>
    </div>
  );
}

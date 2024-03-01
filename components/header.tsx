'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiSun } from "react-icons/fi";

export default function Header() {
  const pathname = usePathname();
  console.log(pathname);
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
          <button>
            <FiSun />
          </button>
        </li>
      </ul>
    </div>
  );
}

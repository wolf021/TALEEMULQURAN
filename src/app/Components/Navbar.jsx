"use client"
import Image from "next/image"
import Logo from "../Assets/Logo.jpeg"
import { useState } from "react"
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleNavbar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="bg-white  border-b border-b-green-00 ">
      <div className="max-w-7xl mx-auto   px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between md:justify-around h-16">
          <div className="flex items-center ">
              <Link href={"/"} >
            <div className="flex-shrink-0 flex  items-center ">

              <span className="text-green-700 ">
                <Image src={Logo} width={50} />
              </span>
              <span className="text-green-900 font-semibold" >Taleem Ul Quraan</span>
            </div>
              </Link>
            <div className=" max-sm:hidden max-md:block  lg:block">
              <div className="ml-10 flex items-baseline space-x-4">
               
                <a
                  href="/#courses"
                  className="text-black hover:bg-gray-200 hover:text-green-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Courses
                </a>
                <a
                  href="/#footer"
                  className="text-black hover:bg-gray-200 hover:text-green-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
          {/* Menu button for small screens */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleNavbar}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-green-700 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 focus:text-green-700"
            >
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menu items for small screens */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
         
          <a
            href="/#courses"
            className="text-black hover:bg-gray-200 hover:text-green-700 block px-3 py-2 rounded-md text-base font-medium"
          >
            Courses
          </a>
          <a
            href="/#footer"
            className="text-black hover:bg-gray-200 hover:text-green-700 block px-3 py-2 rounded-md text-base font-medium"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

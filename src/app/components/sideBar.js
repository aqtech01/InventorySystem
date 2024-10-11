"use client";
import React, { useState } from "react";
import { RiAccountCircleFill } from "react-icons/ri";
import Header from "./Header";

export default function SideBar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex flex-wrap h-screen">
      {/* Sidebar */}
      <div className="bg-slate-900 text-white w-64 h-full">
        <button
          data-drawer-target="logo-sidebar"
          data-drawer-toggle="logo-sidebar"
          aria-controls="logo-sidebar"
          type="button"
          className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-white rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open sidebar</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>

        <aside
          id="logo-sidebar"
          className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
          aria-label="Sidebar"
        >
          <div className="h-full px-3 py-4 overflow-y-auto bg-slate-900 text-white dark:bg-gray-800">
            <a href="#" className="flex items-center ps-2.5 mb-5">
              <RiAccountCircleFill className="w-20 h-20" />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                Name
              </span>
            </a>
            <ul className="space-y-2 font-medium">
              {/* Dashboard */}
              <li className="text-white hover:text-slate-800 hover:bg-white rounded-md">
                <a href="#" className="flex items-center p-2 group">
                  <svg
                    className="w-5 h-5 transition duration-75"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 21"
                  >
                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Dashboard
                  </span>
                </a>
              </li>

              {/* Stock with Dropdown */}
              <li>
                <button
                  type="button"
                  className="flex items-center w-full p-2 text-base text-white transition duration-75 rounded-lg group hover:bg-gray-100 hover:text-black dark:text-white dark:hover:bg-gray-700 dark:hover:text-black"
                  aria-controls="dropdown-example"
                  onClick={toggleDropdown} // Handle click to toggle dropdown
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-white transition duration-75 group-hover:text-black dark:text-white dark:group-hover:text-black"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 21"
                  >
                    <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                  </svg>

                  <span className="flex-1 ms-3 text-left whitespace-nowrap">
                    Stock
                  </span>

                  <svg
                    className="w-3 h-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>

                {/* Dropdown menu */}
                <ul
                  id="dropdown-example"
                  className={`${isDropdownOpen ? "" : "hidden"} py-2 space-y-2`}
                >
                  <li>
                    <a
                      href="#"
                      className="flex items-center w-full p-2 text-white hover:text-black rounded-lg pl-11 group hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Products
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center w-full p-2 text-white hover:text-black rounded-lg pl-11 group hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Sales
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center w-full p-2 text-white hover:text-black rounded-lg pl-11 group hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Purchase
                    </a>
                  </li>
                </ul>
              </li>

              {/* Users */}
              <li className="text-white hover:text-slate-800 hover:bg-white rounded-md">
                <a href="#" className="flex items-center p-2 group">
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 18"
                  >
                    <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap">Users</span>
                </a>
              </li>

              {/* Reports */}
              <li className="text-white hover:text-slate-800 hover:bg-white rounded-md">
                <a href="#" className="flex items-center p-2 group">
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7 9v6a4 4 0 0 0 4 4h4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1v2Z"
                      clipRule="evenodd"
                    />
                    <path
                      fillRule="evenodd"
                      d="M13 3.054V7H9.2a2 2 0 0 1 .281-.432l2.46-2.87A2 2 0 0 1 13 3.054ZM15 3v4a2 2 0 0 1-2 2H9v6a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-3Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap">Reports</span>
                </a>
              </li>

              {/* Sign Out */}
              <li className="text-white hover:text-slate-800 hover:bg-white rounded-md">
                <a href="#" className="flex items-center p-2 group">
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 12H4m12 0-4 4m4-4-4-4m3-4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2"
                    />
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Sign Out
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </div>

      {/* Main content area */}
      <div className="flex-1 h-full">
        <Header />
      </div>
    </div>
  );
}

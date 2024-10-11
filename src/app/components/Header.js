"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import profile from '../../../Public/assets/images/Profile.png';
import { FaSearch } from 'react-icons/fa';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="w-full relative">
      <nav className="bg-white border-gray-200 dark:bg-gray-900 flex justify-between items-center h-16 px-4 shadow shadow-black">
        <a href="https://flowbite.com" className="flex items-center space-x-3">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Inventory</span>
        </a>

        <div className="flex items-center gap-10">
          <div className="flex items-center border rounded-lg overflow-hidden">
            <FaSearch className="p-2 text-gray-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search..."
              className="border-0 focus:ring-0 p-2"
            />
          </div>

          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex bg-gray-800 rounded-full"
              type="button"
            >
              <span className="sr-only">Open user menu</span>
              <Image className="rounded-full" src={profile} width={40} height={40} alt="user photo" />
            </button>

            {/* Dropdown menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                  <div>Bonnie Green</div>
                  <div className="font-medium truncate">name@flowbite.com</div>
                </div>
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton">
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                  </li>
                </ul>
                <div className="py-2">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;

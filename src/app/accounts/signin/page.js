"use client";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
const page = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confPassword: "",
    phone: "",
    image: "",
    Role: "",
    rememberMe: false,
  });
  const userHandle = (e) => {
    const { name, type, checked, value } = e.target;
    setUser({ ...user, [name]: type === "checkbox" ? checked : value });
    console.log(name, type === "checkbox" ? checked : value);
  };
  const Submit = (e) => {
    e.preventDefault();
    alert("Congratulation! submitted successfully");
  };
  console.log(user);
  return (
    <div>
      <h1 className="font-bold text-4xl flex justify-center mt-10">
        WellCome...!
      </h1>
      <form
        class="max-w-md mx-auto m-4 p-10 border shadow-gray-400 bg-cyan-950 rounded-lg"
        onSubmit={Submit}
      >
        <div className="flex justify-center">
      <button
        className="flex items-center border border-white rounded-full px-4 py-2 hover:bg-black"
      >
        <FcGoogle className="w-8 h-8 mr-2" />
        <span className="text-white font-medium">Sign in with Google</span>
      </button>
    </div>
    <h1 className="font-bold m- flex justify-center text-white">OR</h1>
        <div class="grid md:grid-cols-2 md:gap-6">
          <div class="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="firstName"
              id="floating_first_name"
              value={user.firstName}
              onChange={userHandle}
              class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="firsName"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              First name
            </label>
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="lastName"
              id="floating_last_name"
              value={user.lastName}
              onChange={userHandle}
              class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_last_name"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Last name
            </label>
          </div>
        </div>
        <div class="grid md:grid-cols-2 md:gap-6">
          <div class="relative z-0 w-full mb-5 group">
            <input
              type="email"
              name="email"
              id="floating_first_name"
              value={user.email}
              onChange={userHandle}
              class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="email"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email
            </label>
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <input
              type="password"
              name="password"
              id="floating_last_name"
              value={user.password}
              onChange={userHandle}
              class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_last_name"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              password
            </label>
          </div>
        </div>
        <fieldset className="flex">
  <legend className="text-white font-normal">Roles</legend>

  <div className="flex items-center m-4">
    <input
      id="admin"
      type="radio"
      name="Role" // Change to a common name
      value="admin" // Set the value directly
      checked={user.Role === "admin"} // Check based on the Role state
      onChange={userHandle}
      className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
    />
    <label
      htmlFor="admin"
      className="block ms-2 text-sm font-medium text-white dark:text-gray-300"
    >
      Admin
    </label>
  </div>

  <div className="flex items-center m-4">
    <input
      id="cashier" 
      type="radio"
      name="Role" 
      value="cashier" 
      checked={user.Role === "cashier"} 
      onChange={userHandle}
      className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
    />
    <label
      htmlFor="cashier"
      className="block ms-2 text-sm font-medium text-white dark:text-gray-300"
    >
      Cashier
    </label>
  </div>
</fieldset>

        <div class="grid md:grid-cols-2 md:gap-6">
          <div class="relative z-0 w-full group">
            <input
              type="tel"
              name="phone"
              value={user.phone}
              onChange={userHandle}
              id="floating_phone"
              class="block py-2.5 px-0 w-full text-sm text-white  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="phone"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Phone number
            </label>
          </div>
          <div class="relative z-0 w-full mt-3  group">
            <input
              type="file"
              name="image"
              value={user.image}
              onChange={userHandle}
              id="floating_last_name"
              class="block py-5 px-0 w-full text-sm text-gray-400 bg-transparent border-0  border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="file"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Image
            </label>
          </div>
        </div>
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            name="rememberMe"
            id="rememberMe"
            checked={user.rememberMe}
            onChange={userHandle}
            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <label
            htmlFor="rememberMe"
            className="ml-2 text-sm text-white"
          >
            Remember Me
          </label>
        </div>
        <button
          type="submit"
          class="text-black bg-white hover:bg-black hover:text-white  focus:ring-4 focus:outline-none focus:ring-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-white dark:hover:bg-white dark:focus:ring-white"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default page; 
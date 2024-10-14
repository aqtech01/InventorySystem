"use client"
import React, { useState } from 'react';
const SignUp = () => {
  const [formState, setFormState] = useState({
    email: '',
    password: '',
    error: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
      error: '', 
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formState;
    if (!email || !password) {
      setFormState((prevState) => ({
        ...prevState,
        error: 'Please fill in all fields',
      }));
      return;
    }
    console.log('Email:', email);
    console.log('Password:', password);
    setFormState({ email: '', password: '', error: '' });
  };

  return (
    <div>
      <form className="max-w-sm mx-6 my-6 bg-sky-950 p-4" onSubmit={handleSubmit}>
        {formState.error && <p className="text-red-500 text-sm">{formState.error}</p>}
        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
            value={formState.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-5">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={formState.password}
            onChange={handleChange}
            required
          />
          <a href="#" className="mt-1 text-sm text-blue-600 hover:underline dark:text-blue-500">Forgot password?</a>
        </div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      </form>
    </div>
  );
}

export default SignUp;

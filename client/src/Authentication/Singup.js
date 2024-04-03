import React, { useState } from "react";
import { Link } from "react-router-dom";
import Signuppage from "../Images/singup.jpg"; // Make sure to import the correct image file
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setnumber] = useState("");
  const [age, setage] = useState()

  const navigate = useNavigate();

  const handleSignUp = async (event) => {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Number:", number);
    console.log("age:", age);

    try {
      const response = await fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password, number , age }),
      });
      const data = await response.json();
      console.log("Signup successful:", data);
      navigate('/login')
      // Clear form fields after successful signup
      setname("");
      setEmail("");
      setPassword("");
      setnumber("");
      setage("");
    } catch (error) {
      console.error("Error signing up:", error);
      // Handle signup error here
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-yellow-50">
      <img src={Signuppage} className="absolute inset-0 bg-cover bg-center" />
      <div className="z-10 max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
        <div>
          <h2 className="text-3xl font-extrabold text-gray-900 text-center">
            Sign Up
          </h2>
        </div>
        <form onSubmit={handleSignUp} className="space-y-6">
          <div>
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              autoComplete="name"
              value={name}
              onChange={(e) => setname(e.target.value)}
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm focus:border-gradient"
              placeholder="Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm focus:border-gradient"
              placeholder="Email address"
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm focus:border-gradient"
              placeholder="Password"
            />
          </div>
          <div>
            <label htmlFor="number" className="sr-only">
              Number
            </label>
            <input
              type="number"
              id="number"
              name="number"
              autoComplete="new-number"
              value={number}
              onChange={(e) => setnumber(e.target.value)}
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm focus:border-gradient"
              placeholder="Number"
            />
          </div>
          <div>
            <label htmlFor="age" className="sr-only">
              age
            </label>
            <input
              type="age"
              id="age"
              name="age"
              autoComplete="new-age"
              value={age}
              onChange={(e) => setage(e.target.value)}
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm focus:border-gradient"
              placeholder="age"
            />
          </div>
          {/* Add more input fields here as needed */}
          
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-yellow-300 via-red-500 to-pink-500 hover:from-yellow-400 hover:via-red-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign Up
            </button>
          </div>
          <div className="text-center text-sm">
            <p>
              Already have an account?{" "}
              <Link to="/login" className="font-medium text-red-600">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import Signuppage from '../Images/login.jpg'; // Make sure to import the correct image file

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = (event) => {
    event.preventDefault();
    // Perform signup logic here
    console.log('Email:', email);
    console.log('Password:', password);
    // Clear form fields after submission
    setEmail('');
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="z-10 max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md ml-8">
        <div>
          <h2 className="text-3xl font-extrabold text-gray-900 text-center">Login Page</h2>
        </div>
        <form onSubmit={handleSignUp} className="space-y-6">
          <div>
            <label htmlFor="email" className="sr-only">Email address</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              autoComplete="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Email address" 
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">Password</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              autoComplete="new-password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
              placeholder="Password" 
            />
          </div>
          <div>
            <button 
              type="submit" 
              className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign Up
            </button>
          </div>
          <div className="text-center text-sm">
            <p>
              Already have an account?{' '}
              <Link to="/signin" className="font-medium text-indigo-600 hover:text-indigo-500">
                Sign In
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

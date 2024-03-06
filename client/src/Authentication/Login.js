import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [filled, setFilled] = useState(false);

  const handleSignUp = (event) => {
    event.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    // Reset input fields and focus states
    setEmail('');
    setPassword('');
    setEmailFocused(false);
    setPasswordFocused(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
    setFilled(email.trim() !== '' && password.trim() !== '');
  };

  const inputStyle = (isFocused) => ({
    borderImage: isFocused ? 'linear-gradient(270deg, #FAAF3A 0%, #F7635B 52.6%, #F75878 100%) 1' : 'none',
    borderWidth: '2px'
  });

  return (
    <div className="relative flex items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8 ">
      <div className="z-10 max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
        <div>
          <h2 className="text-3xl font-extrabold text-gray-900 text-center">Login</h2>
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
              onChange={handleInputChange} 
              onFocus={() => setEmailFocused(true)}
              onBlur={() => setEmailFocused(false)}
              required 
              className="appearance-none rounded-none relative block w-full px-3 py-2 placeholder-gray-500 text-gray-900 focus:outline-none sm:text-sm"
              style={inputStyle(emailFocused)}
              placeholder="Email address" 
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">Password</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              autoComplete="current-password" 
              value={password} 
              onChange={handleInputChange} 
              onFocus={() => setPasswordFocused(true)}
              onBlur={() => setPasswordFocused(false)}
              required 
              className="appearance-none rounded-none relative block w-full px-3 py-2 placeholder-gray-500 text-gray-900 focus:outline-none sm:text-sm" 
              style={inputStyle(passwordFocused)}
              placeholder="Password" 
            />
          </div>
          <div>
            <button 
              type="submit" 
              className={`w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${filled ? 'bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600' : 'bg-gray-300 text-gray-600 cursor-not-allowed'}`}
              disabled={!filled}
            >
              Login
            </button>
          </div>
          <div className="text-center  text-sm">
            <p className='flex justify-between text-red-600'>
              Forgot Password?
              <Link to="/signup" className="font-medium text-red-600 ">
                Sign Up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

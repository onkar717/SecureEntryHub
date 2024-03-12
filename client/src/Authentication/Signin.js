import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Signuppage from "../Images/singup.jpg"; // Make sure to import the correct image file

const Login = () => {
  const [email, setEmail] = useState("");
  // const [password, setPassword] = useState('');
  const [emailFocused, setEmailFocused] = useState(false);
  // const [passwordFocused, setPasswordFocused] = useState(false);
  const [filled, setFilled] = useState(false);

  // const navigate = useNavigate();

  const handleSignUp = async (event) => {
    event.preventDefault();
    // Call fetchlogin function to send login request
    // fetchlogin(email, password);
    // Reset input fields and focus states
    setEmail("");
    // setPassword('');
    setEmailFocused(false);
    // setPasswordFocused(false);
  };

  // const fetchlogin = async (email, password) => {
  //   try {
  //     const response = await fetch('/login', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify({ email, password })
  //     });
  //     const data = await response.json();
  //     navigate('/');
  //     console.log(data);
  //   } catch (error) {
  //     console.error('Error logging in:', error);
  //   }
  // }

  useEffect(() => {
    // Check if email and password are filled
    setFilled(email.trim() !== "");
  }, [email]);

  const inputStyle = (isFocused) => ({
    borderImage: isFocused
      ? "linear-gradient(270deg, #FAAF3A 0%, #F7635B 52.6%, #F75878 100%) 1"
      : "none",
    borderWidth: "2px",
  });

  return (
    <div className="relative flex items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8 ">
      <img src={Signuppage} className="absolute inset-0 bg-cover bg-center" />
      <div className="z-10 max-w-md w-full  bg-white p-8 rounded-lg shadow-md">
        <div>
          <h2 className="text-3xl font-extrabold text-gray-900 text-center">
            Sing Up
          </h2>
        </div>
        <form onSubmit={handleSignUp} action="post" className="space-y-6">
          <div>
            <label htmlFor="email" className="text-sm">
              Email Id*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setEmailFocused(true)}
              onBlur={() => setEmailFocused(false)}
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 placeholder-gray-500 text-gray-900 focus:outline-none sm:text-sm"
              style={inputStyle(emailFocused)}
              // placeholder="Email address"
            />
          </div>
          <div className="-mt-5">
            <label className="text-sm text-gray-500 mt-10">
              You will be able to sign up only if your email id is provided by
              your society admin
            </label>
          </div>
          <div>
            <div className="text-gray-500">Verify Email Id</div>
            <div className="flex justify-between items-center">
              <button
                type="submit"
                className={` w-40 max-w-md mt-4 py-2 px-4 border border-transparent text-sm text-blue-500 font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                  filled
                    ? "bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600"
                    : "bg-gray-300 text-gray-600 cursor-not-allowed"
                }`}
                disabled={!filled}
              >
                Request OTP
              </button>
              <Link to='/signup'>
              <p className="mt-2 text-sm text-blue-500">Already a User? Sign In</p>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

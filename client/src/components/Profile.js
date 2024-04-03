import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaBirthdayCake, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import { usercontext } from '../App';
import Logut from '../Authentication/Logout';

function Profile() {
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  const {state } = useState(usercontext);


  const fetchData = async () => {
    try {
      const response = await fetch('/about', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        credentials: 'include'
      });

      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }

      const userData = await response.json();
      setData(userData);
    } catch (error) {
      console.error(error);
      navigate('/login');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handellogout = () => {
    // <Logut />
    // useEffect(() => {
      fetch('/logout' , {
          method:'GET',
          headers:{
              Accept : 'application/json',
              "Content-type" : "application/json"
          },
          credentials:'include'
      }).then((res) => {
          // dispatch({type:"USER", payload:true})
          navigate('/')
          if (!res.status === 200) {
              const error = new Error(res.error)
              throw error
          }
      }).catch((err)=> {
          console.log(err);
      })
  // })
  }


  if (!state) {
  return (
    <div className="max-w-md mx-auto mt-8 bg-white shadow-md rounded-lg overflow-hidden">
      <div className="bg-gray-200 px-4 py-6 border-b border-gray-300">
        <div className="flex items-center justify-center">
          <div className="w-16 h-16 flex justify-center items-center bg-gray-300 rounded-full border-4 border-white">
            <FaUser className="text-gray-600 text-lg" />
          </div>
        </div>
        {data && (
          <div className="text-center mt-4">
            <h2 className="text-xl font-semibold text-gray-800">{data.name}</h2>
            <p className="text-sm text-gray-600">{data.email}</p>
          </div>
        )}
      </div>
      {data && (
        <div className="p-4">
          <ul className="space-y-2">
            {data.age && (
              <li>
                <FaBirthdayCake className="inline-block mr-2 text-gray-600" />
                <span className="text-sm text-gray-600">Age: {data.age}</span>
              </li>
            )}
            {data.number && (
              <li>
                <FaMapMarkerAlt className="inline-block mr-2 text-gray-600" />
                <span className="text-sm text-gray-600">Number: {data.number}</span>
              </li>
            )}
            <li>
              <FaEnvelope className="inline-block mr-2 text-gray-600" />
              <span className="text-sm text-gray-600">{data.email}</span>
            </li>
            <li>

            <button
            onClick={handellogout}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">>
            LogOut
          </button>
          </li>
            {/* Add more user information fields here */}
          </ul>
        </div>
      )}
    </div>
  );
  }
}

export default Profile;
